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
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleComplete(id, completed) {
        this.props.editQuestion(id, completed);
    }

    handleDelete(id) {
        this.props.deleteQuestionFromDB(id);
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
                          deleteQuestion={this.handleDelete}
                        />
                    );
                })}
            </div>
        );
    }
}

Classroom.propTypes = {
    createQuestionInDB: PropTypes.func.isRequired,
    editQuestion: PropTypes.func.isRequired,
    deleteQuestionFromDB: PropTypes.func.isRequired,
};

Classroom.defaultProps = {
    question: [],
};
