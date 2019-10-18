let nextId = 0;

export const addTodo = (text) => ({
    type: TODO_TYPES.ADD_TODO,
    id: nextId++,
    text
});

export const setVilivilityFilter = (filter) => ({
    type: TODO_TYPES.VISIBILITY_FILTER,
    filter
});

export const toggleTodo = (id) => ({
    type: TODO_TYPES.TOGGLE_TODO,
    id
});

export const visibilityType = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

export const TODO_TYPES = {
    ADD_TODO: "ADD_TODO",
    VISIBILITY_FILTER: "VISIBILITY_FILTER",
    TOGGLE_TODO: "TOGGLE_TODO"
};
