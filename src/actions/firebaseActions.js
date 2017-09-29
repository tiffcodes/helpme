import { database } from '../functions/firebase';

const questionsRef = database.ref('/questions');

 // create questions:
export const addQuestion = (id, question, completed, timestamp) => {
    return {
        type: 'ADD_QUESTION',
        id,
        question,
        completed,
        timestamp,
    };
};

// create question in firebase:
export const createQuestionInDB = (question) => {
    return () => {
        const newQuestion = {
            timestamp: Date.now(),
            completed: false,
            question,
        };
        const qRefPush = questionsRef.push();
        qRefPush.set(newQuestion);
    };
};

// update question:
export const updateQuestion = (id, question, completed) => {
    return {
        type: 'UPDATE_QUESTION',
        id,
        question,
        completed,
    };
};

// update question in firebase:
export const updateQuestionInDB = (id, whatChanged, question, completed) => {
    return () => {
        if (whatChanged === 'completed') {
            questionsRef.child(id).update({
                completed: !completed,
            });
        }
        questionsRef.child(id).update({
            question,
        });
    };
};

// delete question:
export const deleteQuestion = (id) => {
    return {
        type: 'DELETE_QUESTION',
        id,
    };
};

// delete question in firebase:
export const deleteQuestionFromDB = (id) => {
    return () => {
        questionsRef.child(id).remove();
    };
};

// listen for changes in firebase:
export const startListeningForQuestions = () => {
    return (dispatch) => {
        questionsRef.on('child_added', (snapshot) => {
            dispatch(addQuestion(
                snapshot.key,
                snapshot.val().question,
                snapshot.val().completed,
                snapshot.val().timestamp,
            ));
        });

        questionsRef.on('child_changed', (snapshot) => {
            dispatch(updateQuestion(
                snapshot.key,
                snapshot.val().question,
                snapshot.val().completed,
            ));
        });

        questionsRef.on('child_removed', (snapshot) => {
            dispatch(deleteQuestion(snapshot.key));
        });
    };
};
