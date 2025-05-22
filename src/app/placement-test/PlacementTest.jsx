'use client';
import React from 'react';
import usePlacementQuestions from '@/hooks/usePlacementQuestions';
import usePlacementTest from '@/hooks/usePlacementTest';

export default function PlacementTest() {
  const { questions, loading, error } = usePlacementQuestions();
  const test = usePlacementTest(questions);            // ← all logic lives here

  /* ----------  render guards  ---------- */
  if (loading) return <p style={{ textAlign:'center',marginTop:'4rem' }}>Loading questions…</p>;
  if (error)   return <p style={{ textAlign:'center',marginTop:'4rem',color:'red' }}>{error}</p>;

  return (
    <div style={{ padding:'2rem', maxWidth:800, margin:'0 auto' }}>
      <h1>Level Assessment</h1>
      <p>This test assesses your level in Mathematics and Physics.</p>

      {questions.map((q, idx) => (
        <div key={q.id} style={{ marginTop:'2rem' }}>
          <h3>
            Question {idx+1}/{questions.length}{' '}
            <small style={{ fontWeight:400 }}>({q.subject})</small>
          </h3>

          <p>{q.questions}</p>

          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem' }}>
            {q.options.map(opt => {
              /* colour logic */
              let bg='#fff';
              if (test.showAll || test.submitted[q.id]) {
                if (opt===q.correct)          bg='#c9f7d5';          // green
                else if (test.answers[q.id]===opt) bg='#ffdbdb';     // red
              } else if (test.answers[q.id]===opt) bg='#e0f0ff';

              return (
                <label key={opt} style={{
                  border:'1px solid #ccc', borderRadius:5, padding:10, backgroundColor:bg
                }}>
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={opt}
                    checked={test.answers[q.id]===opt}
                    onChange={() => test.select(q.id, opt)}
                    style={{ marginRight:10 }}
                  />
                  {opt}
                </label>
              );
            })}
          </div>

          {!test.showAll && !test.submitted[q.id] && (
            <button
              onClick={() => test.submitOne(q.id)}
              style={{
                marginTop:10, padding:'8px 16px', backgroundColor:'#007bff',
                color:'#fff', border:0, borderRadius:5, cursor:'pointer'
              }}
            >
              Check
            </button>
          )}
        </div>
      ))}

      {/* ----------  final submit / result ---------- */}
      {!test.showAll ? (
        <button
          disabled={!test.allAnswered}
          onClick={test.submitAll}
          style={{
            marginTop:24, padding:'10px 24px', fontSize:16,
            backgroundColor:test.allAnswered ? '#28a745' : '#9aa',
            color:'#fff', border:0, borderRadius:6, cursor: test.allAnswered?'pointer':'not-allowed'
          }}
        >
          Submit All
        </button>
      ) : (
        <p style={{ marginTop:16, fontSize:18 }}>
          Math {test.score.math}/10 → <b>{test.level(test.score.math)}</b> &nbsp;|&nbsp;
          Physics {test.score.physics}/10 → <b>{test.level(test.score.physics)}</b>
        </p>
      )}
    </div>
  );
}
