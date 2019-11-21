import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';

//리액트야 Subject라는 이름의 태그를 만들거야. 사용자 정의 태그
class Subject extends Component {
  //이 태그의 내용은 아래와 같아.
  render() {
    return(
      <header>
        <h1>WEB</h1>
        World Wide Web
      </header>
    )
  }
}

class App extends Compoment {
  render () {
    return (
      <div className="App">
        <Subject></Subject>
        <Subject></Subject>
        <nav>
          <ol>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
          </ol>
        </nav>
        <article>
            <h2>Welcom</h2>
            Hello React
        </article>
      </div>
    );
  }
}

export default App;
