'use client';
import { useState, useCallback, useMemo } from 'react';
import { supabase } from '@/lib/supabaseClient';

/**
 * Manages answer state, per-question feedback, final score,
 * and writes the result to `placement_results`.
 */
export default function usePlacementTest(questions = []) {
  const [answers, setAnswers]     = useState({});      // { qid: chosenOpt }
  const [submitted, setSubmitted] = useState({});      // { qid: true }
  const [showAll, setShowAll]     = useState(false);   // final submit pressed
  const [score, setScore]         = useState({ math:0, physics:0 });

  /** choose option */
  const select = useCallback((qid, opt) => {
    setAnswers(prev => ({ ...prev, [qid]: opt }));
  }, []);

  /** submit single question (colour reveal) */
  const submitOne = useCallback(qid => {
    setSubmitted(prev => ({ ...prev, [qid]: true }));
  }, []);

  /** helper to map score➔level */
  const level = useCallback(s =>
    s >= 8 ? 'advanced' : s >= 5 ? 'intermediate' : 'beginner'
  , []);

  /** submit all & persist */
  const submitAll = useCallback(async () => {
    // compute score
    let math = 0, physics = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        q.subject === 'math' ? math++ : physics++;
      }
    });
    setScore({ math, physics });
    setShowAll(true);

    // write to DB
    const userResp = await supabase.auth.getUser();
    const user = userResp.data.user;
    if (user) {
      await supabase.from('placement_results').insert({
        user_id: user.id,
        math_correct:    math,
        physics_correct: physics,
        math_level:      level(math),
        physics_level:   level(physics)
      });
    }
  }, [answers, questions, level]);

  /** derived helper for UI */
  const allAnswered = useMemo(
    () => Object.keys(answers).length === questions.length,
    [answers, questions.length]
  );

  return {
    answers,
    submitted,
    showAll,
    score,
    level,
    select,
    submitOne,
    submitAll,
    allAnswered
  };
}
