'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

/**
 * Fetches 10 math + 10 physics placement questions (tagged placement=true).
 */
export default function usePlacementQuestions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // 10 math
             // fetch *all* placement rows per subject
         const { data: mathAll, error: mathErr } = await supabase
         .from('questions')
         .select('*')
         .eq('placement', true)
         .eq('subject', 'math')
        
        const { data: physAll, error: physErr } = await supabase
         .from('questions')
         .select('*')
         .eq('placement', true)
         .eq('subject', 'physics');
        
        // Fisher-Yates shuffle helper
        const shuffle = arr => {
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
              return arr;
        };
        
        const math   = shuffle(mathAll).slice(0, 10);
        const physics = shuffle(physAll).slice(0, 10);

        if (physErr) throw physErr;

        setQuestions([...math, ...physics]);
      } catch (err) {
        console.error(err);
        setError('Failed to load questions');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { questions, loading, error };
}
