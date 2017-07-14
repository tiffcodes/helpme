import { connect } from 'react-redux';
import { createQuestionInDB, updateQuestionInDB, deleteQuestionFromDB } from '../../actions/firebaseActions';
import Classroom from './Classroom';

const mapStateToProps = ({ questions }) => ({
    questions,
});

const mapDispatchToProps = dispatch => ({
    createQuestionInDB: (question) => {
        dispatch(createQuestionInDB(question));
    },
    updateQuestionInDB: (id, whatChanged, question, completed) => {
        dispatch(updateQuestionInDB(id, whatChanged, question, completed));
    },
    deleteQuestionFromDB: (id) => {
        dispatch(deleteQuestionFromDB(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
