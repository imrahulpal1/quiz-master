import React from 'react';

const Question = ({ question }) => {
    return (
        <div className="question">
            <h2>{question.text}</h2>
        </div>
    );
};

export default Question;