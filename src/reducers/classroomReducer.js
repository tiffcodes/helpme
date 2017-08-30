const initialState = [];

const classrooms = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_CLASSROOM': {
        return [
            ...state,
            {
                id: action.id,
                name: action.name,
            },
        ];
    }
    case 'DELETE_CLASSROOM': {
        const classroomList = Array.from(state);
        return classroomList.filter((classroom) => {
            return classroom.id !== action.id;
        });
    }
    case 'UPDATE_CLASSROOM': {
        const classroomList = Array.from(state);
        return classroomList.map((classroom) => {
            if (classroom.id === action.id) {
                return Object.assign({},
                    classroom, { name: action.name });
            }
            return classroom;
        });
    }
    default: {
        return state;
    }
    }
};

export default classrooms;
