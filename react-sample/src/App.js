import React from 'react';

//사용자 적용 태그를 만들 수 있음.
class Subject extends React.Component {
  render(){
    return (
      <header>
      <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class Toc extends React.Component {
  render(){
    var list = [];
    // var i = 0;
    // while(i<this.props.data.length){
    //   var item = this.props.data[i];
    //   list.push(<li><a href={item.id+'.html'}>{item.title}</a></li>);
    //   i = i + 1;
    // }

    this.props.data.map(function (item) {
      list.push(<li key={item.id}><a href={item.id+'.html'}>{item.title}</a></li>);
    });

    return (
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
    );
  }
}

class Content extends React.Component {
  render(){
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends React.Component {
  state = {
    contents : [
      {id:1, title:'HTML', desc:'HTML is for imformation'},
      {id:2, title:'CSS', desc:'CSS is for design'},
      {id:3, title:'JavaScript', desc:'JavaScript is for interaction'}
    ]
  }
  render() {
    return (
      <div className="App">

        <Subject title="Web" sub="World Wide Web"></Subject>
        <Toc data={this.state.contents}></Toc>
        <Content title="Welcom" desc="Hello React"></Content>
        
      </div>
    );
  }
}

export default App;
