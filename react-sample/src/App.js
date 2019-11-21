import React from 'react';

//사용자 적용 태그를 만들 수 있음.
class Subject extends React.Component {
  render(){
    return (
      <header>
      <h1><a href="/" onClick={function (e) {
        e.preventDefault();
        this.props.onClick();
      }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}
//데이터로 리스트 뿌리기(목록에 키 값을 줘야함).
class Toc extends React.Component {
  render(){
    var list = [];
    // var i = 0;
    // while(i<this.props.data.length){
    //   var item = this.props.data[i];
    //   list.push(<li><a href={item.id+'.html'}>{item.title}</a></li>);
    //   i = i + 1;
    // }
    for(var i = 0;i<this.props.data.length; i++){
      var item = this.props.data[i];
      list.push(
        <li key={item.id}>
          <a href={item.id+'.html'} onClick={function (id, e) {
            e.preventDefault();
            this.props.onSelect(id);
          }.bind(this, item.id)}>
          {item.title}</a>
        </li>);
    }
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
        <h2>{this.props.data.title}</h2>
        {this.props.data.desc}
      </article>
    );
  }
}

class ContentCreate extends React.Component {
  state = {
    title: '',
    desc:''
  }
  changeFormHandler(e) {
    this.setState({[e.target.name]:e.target.value});
  }
  render(){
    return (
      <article>
        <form onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(this.state);
        }.bind(this)}>
          <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.changeFormHandler.bind(this)}/></p>
          <p><textarea name="desc" placeholder="description" value={this.state.desc} onChange={this.changeFormHandler.bind(this)}></textarea></p>
          <p><input type="submit" /></p>
        </form>  
      </article>
    );
  }
}

class App extends React.Component {
  last_content_id = 3;
  state = {
    mode:'read',
    selected_content_id:1,
    contents : [
      {id:1, title:'HTML', desc:'HTML is for imformation'},
      {id:2, title:'CSS', desc:'CSS is for design'},
      {id:3, title:'JavaScript', desc:'JavaScript is for interaction'}
    ],
  }
  getSeletedContents(){
    for(var i = 0; i<this.state.contents.length; i++){
      var item = this.state.contents[i];
      if(this.state.selected_content_id === item.id){
        return item;
      }
    }

  }
  getContentCompnent(){
    if(this.state.mode === 'read'){
      return <Content data={this.getSeletedContents()}></Content>
    }else if(this.state.mode === 'welcome'){
      return <Content data={{
        title:'Welcom',
        desc:'Hello, React!!!'
      }}></Content>
    }else if(this.state.mode === 'create'){
      return <ContentCreate onSubmit={function (formData) {
        console.log(formData);
        this.last_content_id = this.last_content_id + 1;
        formData.id= this.last_content_id;

        var newContents = Object.assign([],this.state.contents);

        newContents.push(formData);
        this.setState({
          contents : newContents,
          selected_content_id:this.last_content_id,
          mode:'read',
        });
      }.bind(this)}></ContentCreate>
    }
  }
  getControlCompnent(){
    return [
        <a key="1" href="/create" onClick={function (e) {
          e.preventDefault();
          this.setState({
            mode:'create'
          })
        }.bind(this)} >create</a>,
        <a key="2" href="/update"onClick={function (e) {
          e.preventDefault();
          
        }.bind(this)} >update</a>,
        <input key="3" type="button" value="delete" onClick={function () {
          var newContents = this.state.contents.filter(function (el) {
            if(el.id !== this.state.selected_content_id){
              return el;
            }
          }.bind(this));
          console.log('newContents',newContents);
          this.setState({
            contents:newContents,
            mode:'welcome'
          })
        }.bind(this)}></input>
    ]
  }
  render() {
    var content = this.getSeletedContents();
    return (
      <div className="App">

        <Subject onClick={function(){
          this.setState({
            mode:'welcome'});
        }.bind(this)} title="Web" sub="World Wide Web"></Subject>
        <Toc onSelect={function (id) {
          this.setState({
            selected_content_id:id,
            mode:'read'
          })
        }.bind(this)}
        data={this.state.contents}></Toc>

        {this.getControlCompnent()}
        {this.getContentCompnent()}

        
      </div>
    );
  }
}

export default App;
