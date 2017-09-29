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
        console.log('props:', this.props);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.editQuestion = this.editQuestion.bind(this);
    }

    handleDelete(id) {
        this.props.deleteQuestionFromDB(id);
    }

    handleComplete(id, question, completed) {
        const whatChanged = 'completed';
        this.props.updateQuestionInDB(id, whatChanged, question, completed);
    }

    editQuestion(id, question, completed) {
        const whatChanged = 'question';
        this.props.updateQuestionInDB(id, whatChanged, question, completed);
    }

    render() {
        return (
            <li>
                <h2>{this.props.classroomName}</h2>
                <h3>Ask your question:</h3>
                <QuestionForm
                  createQuestionInDB={this.props.createQuestionInDB}
                />
                {this.props.questions.map((question) => {
                    return (
                        <Question
                          key={`question-${question.id}`}
                          handleComplete={this.handleComplete}
                          question={question}
                          deleteQuestion={this.handleDelete}
                          editQuestion={this.editQuestion}
                        />
                    );
                })}
            </li>
        );
    }
}

Classroom.propTypes = {
    createQuestionInDB: PropTypes.func.isRequired,
    updateQuestionInDB: PropTypes.func.isRequired,
    deleteQuestionFromDB: PropTypes.func.isRequired,
};

Classroom.defaultProps = {
    question: [],
};
