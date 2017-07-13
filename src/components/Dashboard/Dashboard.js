import React from 'react';
// import { PropTypes } from 'prop-types';
import ClassroomList from '../ClassroomList/ClassroomList';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            thing: '',
        };
        this.method = this.method.bind(this);
    }
    method() {
        this.setState({
            thing: 'thing',
        });
    }
    render() {
        return (
            <button onClick={this.method}>
                <ClassroomList />
            </button>
        );
    }
}
