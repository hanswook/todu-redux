import {connect} from 'react-redux'
import {toggleTodo, visibilityType} from "../actions";
import TodoList from '../components/TodoList'


const visibilityTodos = (todos, filter) => {
    switch (filter) {
        case visibilityType.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case visibilityType.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case visibilityType.SHOW_ALL:
        default:
            return todos;
    }
};


const mapStateToProps = state => ({
    todos: visibilityTodos(state.todos, state.visibilityFilter)
});


const mapDispatchToPros = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});


export default connect(
    mapStateToProps,
    mapDispatchToPros
)(TodoList)
