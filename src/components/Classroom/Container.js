import { connect } from 'react-redux';
import { createQuestionInDB, completeQuestionInDB, deleteQuestionFromDB } from '../../actions/firebaseActions';
import Classroom from './Classroom';

const mapStateToProps = ({ questions }) => ({
    questions,
});

const mapDispatchToProps = dispatch => ({
    createQuestionInDB: (question) => {
        dispatch(createQuestionInDB(question));
    },
    completeQuestionInDB: (id, completed) => {
        dispatch(completeQuestionInDB(id, completed));
    },
    deleteQuestionFromDB: (id) => {
        dispatch(deleteQuestionFromDB(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
