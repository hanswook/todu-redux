import React from 'react'
import AddTodo from "../container/AddTodo";
import rootReducer from '../reducers'
import Provider from "react-redux/es/components/Provider";


/**
 * 添加redux开发工具。chrome插件
 */
import {applyMiddleware, compose,createStore} from 'redux';
import thunk from 'redux-thunk'
import Footer from "../components/Footer";
import VisibilityTodoList from "../container/VisibilityTodoList";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));



const App = () => (
    <Provider store={store}>
        <div>
            <AddTodo> lalala </AddTodo>
            <VisibilityTodoList/>
            <Footer/>
        </div>
    </Provider>
);


export default App;
