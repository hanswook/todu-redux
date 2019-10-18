import React from 'react'
import PropTypes from 'prop-types'
import Todo from "./Todo";


const TodoList = ({todos, toggleTodo}) => {


    return (
        <ul>
            {todos.map(t => (
                <Todo key={t.id} {...t} onClick={() => toggleTodo(t.id)}/>
            ))}
        </ul>
    )
};
export default TodoList;

TodoList.prototype = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
};
