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


//데이터 소스는 한군데로 메인 컴포넌트가 데이터를 다 가지고 있음
//그걸 각각 컴포넌트에 props를 이용해서 정보를 출력하는 것
//데이터 플로우: 큰 컴포넌트가 정보를 다 가지고 있고 그걸 각기 칠드런에게 전달함

//movies array를 새로 mapping해서 새로운 array를 만듬

//컴포넌트: willmount->render->didmount : 이 세가지는 컴포넌트가 존재하기 시작할때 작동함
class App extends Component {
  // 자동으로 이 순서대로 작동한다
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // 컴포넌트가 마운트할때마다 greeting을 hello에서 hello again으로 바꿔준다 -> state가 변경되면 render가 새로운 state와 함께 다시 작동한다
  state = {
    greeting: "Hello!",
    
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
          },
          {
            title: "Old Boy",
            poster: "https://stat.ameba.jp/user_images/20190425/21/guambal/49/cc/j/o0220031314397652177.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
          },
          {
            title: "Trainspotting",
            poster: "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          }
        ]
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
