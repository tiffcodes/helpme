const initialState = [];

const questions = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_QUESTION': {
        return [
            ...state,
            {
                id: action.id,
                question: action.question,
                completed: action.completed,
                timestamp: action.timestamp,
            },
        ];
    }
    case 'DELETE_QUESTION': {
        const questionList = Array.from(state);
        return questionList.filter((question) => {
            return question.id !== action.id;
        });
    }
    case 'UPDATE_QUESTION': {
        const questionList = Array.from(state);
        return questionList.map((question) => {
            if (question.id === action.id) {
                return Object.assign({},
                    question, { question: question.question });
            }
            return question;
        });
    }
    case 'COMPLETE_QUESTION': {
        const questionList = Array.from(state);
        return questionList.map((question) => {
            console.log('question', question);
            if (question.id === action.id) {
                return Object.assign({},
                    question, { completed: !question.completed });
            }
            return question;
        });
    }
    default: {
        return state;
    }
    }
};

export default questions;
