import { database } from '../functions/firebase';

const questionsRef = database.ref('/questions');

 // create questions:

export const addQuestion = (question, id) => {
    return {
        type: 'ADD_QUESTION',
        id,
        question,
    };
};

export const createQuestionInDB = (question) => {
    return (dispatch) => {
        const newQuestion = {
            question,
        };
        const qRefPush = questionsRef.push();
        qRefPush.set(newQuestion).then(() => {
            const id = qRefPush.key;
            dispatch(addQuestion(question, id));
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


export const deleteQuestionFromDB = ({ id }) => {
    return (dispatch) => {
        questionsRef.child(id).remove().then(() => {
            dispatch(deleteQuestion(id));
        });
    };
};

// listen for changes:

export const startListeningForQuestions = () => {
    return (dispatch) => {
        questionsRef.on('child_added', (snapshot) => {
            dispatch(addQuestion(snapshot.val().question, snapshot.key));
        });

        questionsRef.on('child_changed', (snapshot) => {
            dispatch(addQuestion(snapshot.val().question, snapshot.key));
        });

        questionsRef.on('child_removed', (snapshot) => {
            dispatch(deleteQuestion(snapshot.val));
        });
    };
};


// export function postQuestion() {
//     return (
//        (dispatch) => {
//            questionsRef.ref('questions').on('value', (snapshot) => {
//                dispatch({
//                    type: 'POST_QUESTION',
//                    payload: snapshot.val,
//                });
//            });
//        }
//     );
// }


// export const clearNewMessage = () => {
//     return {
//         type: 'CLEAR_QUESTION',
//     };
// };

