import React from 'react'
import PropTypes from 'prop-types'


const Link = ({onClick, active, children}) => {

    return (
        <button onClick={onClick}
             disabled={active}>
            {children}
        </button>
    )
};


export default Link;

Link.prototype = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

