import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//FROM QUIZ
//react는 라이브러리이고, 쟝고, 루비온레일스와 함께 사용할 수 있다.
//Props are the way parent component gives information to child component
//I can access props on the child component by calling 'this.props'
//I can check what kind of props the components are getting by using 'prop-types'
//I can make a string prop required by typing 'PropTypes.string.isRequired'
//mounting function order: componentWillMount->render->componentDidMount
//Components don't update when their props are the same
//When the components updates, the render function is called again
//Accessing the state of the component: this.state.
//Changing the state of the component: this.setState({})
//If the state changes, the component renders(render()) again
//A dumb component doesn't have state nor render function, and is not a class
//AJAX: Asynchronous Javascript and XML
//"await": we want to wait for the promise() to finish before continue
//We can't use await variable in a non async function


//데이터 소스는 한군데로 메인 컴포넌트가 데이터를 다 가지고 있음
//그걸 각각 컴포넌트에 props를 이용해서 정보를 출력하는 것
//데이터 플로우: 큰 컴포넌트가 정보를 다 가지고 있고 그걸 각기 칠드런에게 전달함

//movies array를 새로 mapping해서 새로운 array를 만듬

//컴포넌트: willmount->render->didmount : 이 세가지는 컴포넌트가 존재하기 시작할때 작동함

//react 자체 기능과 나의 기능을 구분하기 위해서 언더바(_)를 앞에 쓴다

//stateless functional 컴포넌트: state가 없는 컴포넌트: no function render, no lifecycle

//JSON: Javascript Object Notation
//promise: Asynchrnous : 다른 작업을 스케쥴해 놓을 수 있어서 좋다. 모든 작업들은 다른 작업수행과는 관계없이 진행된다

class App extends Component {
  // 자동으로 이 순서대로 작동한다
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // 컴포넌트가 마운트할때마다 greeting을 hello에서 hello again으로 바꿔준다 -> state가 변경되면 render가 새로운 state와 함께 다시 작동한다
  state = {}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
      /> 
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--landing"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
