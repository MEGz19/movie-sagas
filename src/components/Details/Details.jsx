import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link } from 'react-router-dom';

class Details extends Component {


    render() {
        console.log('In Details:', this.props.reduxStore);

        return (
            <div>
                <h1>Details Page</h1>
                {/* <div>{JSON.stringify(this.props.reduxStore.movies)}</div> */}
                {this.props.reduxStore.movies.map(movie => {
                    if (movie.id === this.props.reduxStore.currentMovie) {
                        console.log( 'On details page:', this.props.reduxStore.currentMovie);
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