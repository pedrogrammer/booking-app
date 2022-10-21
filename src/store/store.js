import { createStore } from 'redux';

const initialState = { id: null, color: 'white' };

const colorReducer = (state = initialState, action) => {
    if (action.type === 0) {
        return {
            id: action.id,
            color: '#fec4c4',
        };
    }

    if (action.type === 1) {
        return {
            id: action.id,
            color: '#ff7575',
        };
    }

    if (action.type === 2) {
        return {
            id: action.id,
            color: '#ff0000',
        };
    }

    if (action.type === 3) {
        return {
            id: action.id,
            color: '#b30000',
        };
    }

    if (action.type === 'default') {
        return {
            id: '',
            color: 'aquamarine',
        };
    }

    return state;
};

const store = createStore(colorReducer);

export default store;
