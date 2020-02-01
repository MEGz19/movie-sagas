import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Details extends Component {
    render() {
        return (
            <div>
                <h1>Details Page</h1>
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
export default connect(mapStateToProps)(Details)