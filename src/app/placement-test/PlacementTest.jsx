'use client';
import React, { useState } from 'react';
import placementTestQuestions from './placementTestData';

export default function PlacementTest() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleSelect = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = (questionId) => {
    setSubmitted(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Level Assessmenrrrr</h1>
      <p>This test will assess your level in Mathematics and Physics. Each question is designed to evaluate your understanding of core concepts and problem-solving skills in these subjects.</p>

      {placementTestQuestions.map((q, index) => (
        <div key={q.id} style={{ marginTop: '2rem' }}>
          <h3>Question {index + 1}/{placementTestQuestions.length}</h3>
          <p>{q.question}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {q.options.map(option => (
              <label key={option} style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                backgroundColor: answers[q.id] === option ? '#e0f0ff' : '#fff'
              }}>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={() => handleSelect(q.id, option)}
                  style={{ marginRight: '10px' }}
                />
                {option}
              </label>
            ))}
          </div>
          {!submitted[q.id] && (
            <button onClick={() => handleSubmit(q.id)} style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Submit
            </button>
          )}
        </div>
      ))}
    </div>
  );
}