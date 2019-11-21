import React from 'react';

//사용자 적용 태그를 만들 수 있음.
class Subject extends React.Component {
  render(){
    return (
      <header>
        <h1>WEB</h1>
        World Wide Web
      </header>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">

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


// function App() {
//   return (
//     <div className="App">

//       <header>
//         <h1>WEB</h1>
//         World Wide Web
//       </header>
//       <Subject></Subject>
//       <nav>
//         <ol>
//           <li><a href="1.html">HTML</a></li>
//           <li><a href="2.html">CSS</a></li>
//           <li><a href="3.html">JavaScript</a></li>
//         </ol>
//        </nav>
//       <article>
//           <h2>Welcom</h2>
//           Hello React
//       </article>
//     </div>
//   );
// }

export default App;
