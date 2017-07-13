import { connect } from 'react-redux';
import { completeQuestion } from '../../actions/index';
import { createQuestionInDB } from '../../actions/firebaseActions';
import Classroom from './Classroom';

const mapStateToProps = ({ questions }) => ({
    questions,
});

const mapDispatchToProps = dispatch => ({
    createQuestionInDB: (question) => {
        console.log('container q', question);
        dispatch(createQuestionInDB(question));
    },
    completeQuestion: (id) => {
        dispatch(completeQuestion(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
