import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Question.scss';

const Question = ({ question, handleComplete, deleteQuestion }) => {
    return (
        <ul>
            <li className={question.completed ? 'completed q' : 'notCompleted q'} >
                <button
                  className="deleteQuestion"
                  onClick={() =>
                    deleteQuestion(question.id)}
                >
                    <FontAwesome name="times" />
                    x
                    <span className="visuallyhidden">Delete Question</span>
                </button>
                <p>{question.question}</p>
                <button onClick={() =>
                    handleComplete(question.id, question.completed)}
                >
                    being helped?
                </button>
            </li>
        </ul>
    );
};

export default Question;
