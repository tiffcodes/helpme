import React from 'react';
import './QuestionForm.scss';

export default class QuestionForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createQuestionInDB(this.state.inputValue);
        this.setState({
            inputValue: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="inputValue"
                  onChange={this.handleChange}
                  value={this.state.inputValue}
                />
                <button>submit</button>
            </form>
        );
    }
}
