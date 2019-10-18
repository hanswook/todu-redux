import React from 'react'
import PropTypes from 'prop-types'


const Todo = ({text, completed,onClick}) => {

    return (
        <li
            onClick={onClick}
            style={{
            textDecorationLine: completed ? 'line-through' : 'none'
        }}>
            {text}
        </li>
    )
};


export default Todo;


Todo.prototype = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};
