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
        console.log(question, id);
        const whatChanged = 'question';
        this.props.updateQuestionInDB(id, whatChanged, question, completed);
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
                          // editQuestion={this.updateQuestion}
                        />
                    );
                })}
            </div>
        );
    }
}

Classroom.propTypes = {
    createQuestionInDB: PropTypes.func.isRequired,
    completeQuestionInDB: PropTypes.func.isRequired,
    deleteQuestionFromDB: PropTypes.func.isRequired,
};

Classroom.defaultProps = {
    question: [],
};
