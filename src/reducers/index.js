const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_QUESTION':
        return [
            ...state,
            {
                id: action.id,
                question: action.question,
                completed: false,
            },
        ];
    case 'COMPLETE_QUESTION':
        return state.map((question) => {
            if (question.id === action.id) {
                return {
                    id: question.id,
                    question: question.question,
                    completed: !question.completed,
                };
            }
            return question;
        });
    default:
        return state;
    }
};

export default reducer;
