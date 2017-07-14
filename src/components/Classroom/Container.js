import { connect } from 'react-redux';
// import { completeQuestion } from '../../actions/index';
import { createQuestionInDB, editQuestion } from '../../actions/firebaseActions';
import Classroom from './Classroom';

const mapStateToProps = ({ questions }) => ({
    questions,
});

const mapDispatchToProps = dispatch => ({
    createQuestionInDB: (question) => {
        console.log('container q', question);
        dispatch(createQuestionInDB(question));
    },
    editQuestion: (id) => {
        dispatch(editQuestion(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
