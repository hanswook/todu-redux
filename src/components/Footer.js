import React from 'react'
import FilterLink from "../container/FilterLink";
import {visibilityType} from "../actions";


const Footer = () => {


    return (
        <div>
            <span>show:</span>
            <FilterLink filter={visibilityType.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={visibilityType.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={visibilityType.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
    )
};


export default Footer;
