import React from 'react';
import './Question.scss';

export default class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            editing: false,
        };
        this.startEditing = this.startEditing.bind(this);
        this.checkEditing = this.checkEditing.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmitQ = this.handleSubmitQ.bind(this);
    }

    updateInput(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    startEditing() {
        const editState = this.state.editing;
        this.setState({
            editing: !editState,
        });
    }

    handleSubmitQ() {
        this.setState({
            editing: false,
        });
        this.props.editQuestion(
            this.props.question.id,
            this.state.inputValue,
            this.props.question.completed,
        );
    }

    checkEditing() {
        if (this.state.editing === true) {
            return (
                <div>
                    <input
                      defaultValue={this.props.question.question}
                      onChange={e => this.updateInput(e)}
                    />
                    <button onClick={() =>
                        this.handleSubmitQ()}
                    >
                        submit
                    </button>
                </div>
            );
        }
        return <p>{this.props.question.question}</p>;
    }

    render() {
        return (
            <ul>
                <li className={this.props.question.completed ? 'completed q' : 'notCompleted q'} >
                    <button
                      className="deleteQuestion"
                      onClick={() =>
                        this.props.deleteQuestion(this.props.question.id)}
                    >
                        x
                        <span className="visuallyhidden">Delete Question</span>
                    </button>
                    {this.checkEditing()}
                    <button onClick={() => this.startEditing()}>
                        edit
                    </button>
                    <button onClick={() =>
                        this.props.handleComplete(
                            this.props.question.id,
                            this.props.question.question,
                            this.props.question.completed,
                        )}
                    >
                        being helped?
                    </button>
                </li>
            </ul>
        );
    }
}
