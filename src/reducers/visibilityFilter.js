import {TODO_TYPES, visibilityType} from "../actions";

const visibilityFilter = (state = visibilityType.SHOW_ALL, action) => {
    switch (action.type) {
        case TODO_TYPES.VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;

    }
};

export default visibilityFilter;
