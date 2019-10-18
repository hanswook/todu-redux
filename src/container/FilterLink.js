import {connect} from 'react-redux'
import Link from "../components/Link";
import {setVilivilityFilter} from "../actions";


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVilivilityFilter(ownProps.filter))
});


export default connect(mapStateToProps, mapDispatchToProps)(Link)
