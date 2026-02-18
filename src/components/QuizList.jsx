import React from 'react';

const QuizList = () => {
  // Sample quiz data, this data can be fetched from an API
  const quizzes = [
    { id: 1, title: 'Math Quiz', createdAt: '2026-02-18', questions: 10 },
    { id: 2, title: 'Science Quiz', createdAt: '2026-02-17', questions: 15 },
    { id: 3, title: 'History Quiz', createdAt: '2026-02-16', questions: 5 }
  ];

  return (
    <div>
      <h2>Quiz List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Created At</th>
            <th>Questions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map(quiz => (
            <tr key={quiz.id}>
              <td>{quiz.title}</td>
              <td>{quiz.createdAt}</td>
              <td>{quiz.questions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizList;