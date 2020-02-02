import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Details extends Component {


    render() {
        return (
            <div>
                <h1>Details Page</h1>
                {/* <div>{JSON.stringify(this.props.reduxStore.movies)}</div> */}
                {this.props.reduxStore.movies.map(movie => {
                    if (movie.id == 1) {
                        console.log('1');
                        return <li key={movie.id}>{movie.description}</li>
                    }
                })}
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