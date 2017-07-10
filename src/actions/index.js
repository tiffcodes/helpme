let id = 0;

export const addQuestion = (question) => {
    id += 1;
    return {
        type: 'ADD_QUESTION',
        id,
        question,
    };
};

export const completeQuestion = (questionId) => {
    console.log('workin?');
    return {
        type: 'COMPLETE_QUESTION',
        id: questionId,
    };
};
