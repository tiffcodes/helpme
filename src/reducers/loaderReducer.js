const initialState = { loading: false };

export default function (state = initialState, action) {
    switch (action.type) {
    case 'LOADING':
        return {
            loading: true,
        };
    case 'LOADING_SUCCESS':
        return {
            loading: false,
        };
    default:
        return state;
    }
}
