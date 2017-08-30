import { connect } from 'react-redux';
import { createClassroomInDB, updateClassroomInDB, deleteClassroomFromDB } from '../../actions/firebaseClassroomActions';
import Dashboard from './Dashboard';

const mapStateToProps = ({ classroom }) => ({
    classroom,
});

const mapDispatchToProps = dispatch => ({
    createClassroomInDB: (classroomName) => {
        dispatch(createClassroomInDB(classroomName));
    },
    updateClassroomInDB: (id, classroomName) => {
        dispatch(updateClassroomInDB(id, classroomName));
    },
    deleteClassroomFromDB: (id) => {
        dispatch(deleteClassroomFromDB(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
