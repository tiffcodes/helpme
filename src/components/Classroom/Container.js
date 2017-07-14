import { connect } from 'react-redux';
import { createQuestionInDB, editQuestion, deleteQuestionFromDB } from '../../actions/firebaseActions';
import Classroom from './Classroom';

const mapStateToProps = ({ questions }) => ({
    questions,
});

const mapDispatchToProps = dispatch => ({
    createQuestionInDB: (question) => {
        dispatch(createQuestionInDB(question));
    },
    editQuestion: (id, completed) => {
        dispatch(editQuestion(id, completed));
    },
    deleteQuestionFromDB: (id) => {
        console.log('id container', id);
        dispatch(deleteQuestionFromDB(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
