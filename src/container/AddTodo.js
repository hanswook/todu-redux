import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo} from "../actions";

const AddTodo = ({dispatch, children}) => {
    let input;

    return (
        <div>
            <form onSubmit={
                e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value.trim()))
                    input.value = "";
                }
            }>
                <input ref={node => input = node}/>
                <button type="submit">
                    {children}
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);

AddTodo.prototype = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};




