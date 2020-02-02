import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Link } from 'react-router-dom';


class Home extends Component {
    //make movies appear on page load
    componentDidMount() {
        console.log('In componentDidMount')
        this.props.dispatch({
            type: 'GET_MOVIES'
        })
    }
    
    handleClick  = () =>  {
        console.log('in handleClick');
        //on image click, direct user to /details
        this.props.history.push('/details');
    }
    


    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {/* {JSON.stringify(this.props.reduxStore.movies)} */}
                {this.props.reduxStore.movies.map(movie => {
                    return <div key={movie.id}>
                        <a><img src={movie.poster} onClick={this.handleClick}/></a>
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