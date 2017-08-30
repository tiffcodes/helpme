import { database } from '../functions/firebase';

const classroomRef = database.ref('/classrooms');

 // create questions:

export const addClassroom = (id, name) => {
    return {
        type: 'ADD_CLASSROOM',
        id,
        name,
    };
};

export const createClassroomInDB = (name) => {
    return () => {
        const newClassroom = {
            timestamp: Date.now(),
            name,
        };
        const classroomRefPush = classroomRef.push();
        classroomRefPush.set(newClassroom);
    };
};

// edit classroom:

export const updateClassroom = (id, name) => {
    return {
        type: 'UPDATE_CLASSROOM',
        id,
        name,
    };
};


// delete questions:

export const deleteClassroom = (id) => {
    return {
        type: 'DELETE_CLASSROOM',
        id,
    };
};

export const deleteClassroomFromDB = (id) => {
    return () => {
        classroomRef.child(id).remove();
    };
};

// listen for changes:

export const startListeningForClassrooms = () => {
    return (dispatch) => {
        classroomRef.on('child_added', (snapshot) => {
            dispatch(addClassroom(
                snapshot.key,
                snapshot.val().name,
            ));
        });

        classroomRef.on('child_changed', (snapshot) => {
            dispatch(updateClassroom(
                snapshot.key,
                snapshot.val().name,
            ));
        });

        classroomRef.on('child_removed', (snapshot) => {
            dispatch(deleteClassroom(snapshot.key));
        });
    };
};
