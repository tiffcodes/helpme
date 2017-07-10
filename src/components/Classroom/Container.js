import { connect } from 'react-redux';
import { addQuestion, completeQuestion } from '../../actions/index';
import Classroom from './Classroom';

const mapStateToProps = state => ({
    questions: state,
});

const mapDispatchToProps = dispatch => ({
    addQuestion: (question) => {
        dispatch(addQuestion(question));
    },
    completeQuestion: (id) => {
        dispatch(completeQuestion(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
