import React from 'react';
import { PropTypes } from 'prop-types';
import Question from '../Question/Question';
import QuestionForm from '../QuestionForm/QuestionForm';

export default class Classroom extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete(id) {
        this.props.completeQuestion(id);
    }

    render() {
        return (
            <div>
                <h1>Ask your question:</h1>
                <QuestionForm
                  createQuestionInDB={this.props.createQuestionInDB}
                />
                {this.props.questions.map((question, i) => {
                    return (
                        <Question
                          key={`question-${i}`}
                          handleComplete={this.handleComplete}
                          question={question}
                        />
                    );
                })}
            </div>
        );
    }
}

Classroom.propTypes = {
    createQuestionInDB: PropTypes.func.isRequired,
    completeQuestion: PropTypes.func.isRequired,
};

Classroom.defaultProps = {
    question: [],
};
