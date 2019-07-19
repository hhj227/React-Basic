import React, { Component } from 'react';
import './Movie.css';

//component->render->return->jsx(html written by react)
//부모 컴포넌트가 자식 컴포넌트에게 정보를 줌
class Movie extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster}></img>
        );
    }
}

export default Movie;