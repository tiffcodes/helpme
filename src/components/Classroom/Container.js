import { connect } from 'react-redux';
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
    editQuestion: (id, completed) => {
        dispatch(editQuestion(id, completed));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
