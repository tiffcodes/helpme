const initialState = [];

const questions = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_QUESTION': {
        return [
            ...state,
            {
                id: action.id,
                question: action.question,
                completed: false,
            },
        ];
    }
    case 'DELETE_QUESTION': {
        const questionList = Array.from(state);
        return questionList.filter((question) => {
            return question.id !== action.id;
        });
    }
    case 'COMPLETE_QUESTION': {
        const questionList = Array.from(state);
        return questionList.map((question) => {
            if (question.id === action.id) {
                return {
                    id: question.id,
                    question: question.question,
                    completed: !question.completed,
                };
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
