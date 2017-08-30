import React from 'react';
import { PropTypes } from 'prop-types';
import ClassroomList from '../ClassroomList/ClassroomList';
import CreateClassroom from '../CreateClassroom/CreateClassroom';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            thing: '',
        };
        this.createClassroom = this.createClassroom.bind(this);
        this.updateClassroom = this.updateClassroom.bind(this);
        this.deleteClassroom = this.deleteClassroom.bind(this);
    }

    createClassroom(name) {
        this.props.createClassroomInDB(name);
    }

    updateClassroom(id, name) {
        this.props.updateClassroomInDB(id, name);
    }

    deleteClassroom(id) {
        this.props.deleteClassroomFromDB(id);
    }

    render() {
        return (
            <div>
                <CreateClassroom createClassroom={this.createClassroom} />
                <h2>Classrooms:</h2>
                <ClassroomList
                  deleteClassroom={this.deleteClassroom}
                  updateClassroom={this.updateClassroom}
                />
            </div>
        );
    }
}

Dashboard.propTypes = {
    createClassroomInDB: PropTypes.func.isRequired,
    updateClassroomInDB: PropTypes.func.isRequired,
    deleteClassroomFromDB: PropTypes.func.isRequired,
};

Dashboard.defaultProps = {
    classrooms: [],
};
