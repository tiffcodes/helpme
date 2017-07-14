import { database } from '../functions/firebase';

const questionsRef = database.ref('/questions');

 // create questions:

export const addQuestion = (question, id, completed) => {
    return {
        type: 'ADD_QUESTION',
        id,
        question,
        completed,
    };
};

export const createQuestionInDB = (question) => {
    return () => {
        const newQuestion = {
            question,
        };
        const qRefPush = questionsRef.push();
        qRefPush.set(newQuestion);
    };
};

// edit questions:

export const completeQuestion = (questionId) => {
    return {
        type: 'COMPLETE_QUESTION',
        id: questionId,
    };
};

export const editQuestion = (id, completed) => {
    return () => {
        questionsRef.child(id).update({
            completed: !completed,
        });
    };
};

// delete questions:

export const deleteQuestion = (id) => {
    return {
        type: 'DELETE_QUESTION',
        id,
    };
};


export const deleteQuestionFromDB = (id) => {
    return () => {
        questionsRef.child(id).remove();
    };
};

// listen for changes:

export const startListeningForQuestions = () => {
    return (dispatch) => {
        questionsRef.on('child_added', (snapshot) => {
            dispatch(addQuestion(snapshot.val().question, snapshot.key, snapshot.val().completed));
        });

        questionsRef.on('child_changed', (snapshot) => {
            dispatch(completeQuestion(snapshot.key));
        });

        questionsRef.on('child_removed', (snapshot) => {
            dispatch(deleteQuestion(snapshot.key));
        });
    };
};
