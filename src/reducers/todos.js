import {TODO_TYPES} from "../actions";

const todos = (state = [], action) => {
    switch (action.type) {
        case TODO_TYPES.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    completed: false,
                    text: action.text
                }
            ];
        case TODO_TYPES.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id ? {...todo, completed: !todo.completed} : todo));
        default:
            return state;
    }
};

export default todos;
