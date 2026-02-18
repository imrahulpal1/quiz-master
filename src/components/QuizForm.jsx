import React, { useState } from 'react';

const QuizForm = ({ onSubmit, quiz = {} }) => {
  const [title, setTitle] = useState(quiz.title || '');
  const [questions, setQuestions] = useState(quiz.questions || ['']);

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, questions });
  };

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Quiz Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Questions:</label>
        {questions.map((question, index) => (
          <div key={index}>
            <input
              type="text"
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addQuestion}>Add Question</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuizForm;