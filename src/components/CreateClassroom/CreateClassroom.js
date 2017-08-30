import React from 'react';
import './CreateClassroom.scss';

export default class CreateClassroom extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const classroomName = this.state.inputValue;
        if (classroomName === '') {
            return false;
        }
        this.props.createClassroom(classroomName);
        this.setState({
            inputValue: '',
        });
        return true;
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="createClassroom">Create a classroom:</label>
                <input
                  type="text"
                  id="createClassroom"
                  onChange={e => this.handleInput(e)}
                  placeholder="ex. Summer 1 Web Development, 2017"
                />
                <input type="submit" />
            </form>
        );
    }
}
