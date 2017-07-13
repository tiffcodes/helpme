export const completeQuestion = (questionId) => {
    return {
        type: 'COMPLETE_QUESTION',
        id: questionId,
    };
};

export default completeQuestion;
