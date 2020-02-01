import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';


class Home extends Component {
    //make movies appear on page load
    componentDidMount() {
        console.log('In componentDidMount')
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }


    render() {
        return (
            <div>
                <h1>Home Page</h1>
            </div>
        )
    }


}

const mapStateToProps = (reduxStore) => {
    return (
        {
            reduxStore
        }
    )
}
export default connect(mapStateToProps)(Home)