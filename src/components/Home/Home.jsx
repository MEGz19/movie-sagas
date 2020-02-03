import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Link } from 'react-router-dom';


class Home extends Component {

    // local state:
    // state = {
    //     id: ''
    // }
    // state = {
    //     id: '',
    //     title: '',
    //     poster: '',
    //     description: ''
    // }


    //make movies appear on page load
    componentDidMount() {
        console.log('In componentDidMount')
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }
    
    handleClick  = (id) =>  {
        console.log('in handleClick');
        // select movie by id and send id as payload
        // target movie by id
        this.props.dispatch({
            type: 'SELECT_MOVIE_ID',
            payload: id
        })
    
        //on image click, direct user to /details
        this.props.history.push(`/movies/${id}`);
    }
    


    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {/* {JSON.stringify(this.props.reduxStore.movies)} */}
                {this.props.reduxStore.movies.map(movie => {
                    return <div key={movie.id}>
                        <a><img src={movie.poster} onClick={() => this.handleClick(movie.id)}/></a>
                        <p>{movie.title}</p>
                        <p>{movie.description}</p>
                    </div>
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
export default connect(mapStateToProps)(Home);