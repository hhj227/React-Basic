import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

//component->render->return->jsx(html written by react)
//부모 컴포넌트가 자식 컴포넌트에게 정보를 줌

//proptypes.isrequired -> 필수라는 뜻
class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster}></img>
        );
    }
}

export default Movie;