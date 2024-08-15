import React from 'react';

function RecommendedQuestions({ onQuestionClick }) {
  const questions = [
    'Hello',
    'How are you?',
    'What is your name?',
    'What can you do?',
    'Tell me a joke',
    'What time is it?',
    'What is the weather like?',
    'Thank you',
    'Help',
    'Goodbye'
  ];

  return (
    <div className="recommended-questions">
      <h3>Recommended Questions:</h3>
      <ul>
        {questions.map((question, index) => (
          <li key={index} onClick={() => onQuestionClick(question)}>
            {question}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendedQuestions;
