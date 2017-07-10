import React from 'react';
import './Question.scss';

const Question = ({ question, handleComplete }) => {
    console.log(question.id);
    return (
        <ul>
            <li className={question.completed ? 'completed' : 'notCompleted'} >
                <p>{question.question}</p>
                <button onClick={() => handleComplete(question.id)}>being helped?</button>
            </li>
        </ul>
    );
};

export default Question;
