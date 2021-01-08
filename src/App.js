import React, { Component } from 'react';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      books: [],
    };
  }

  componentDidMount(){
    const url = 'https://www.googleapis.com/books/v1/volumes';
    const options={
      method: 'GET',
      headers: {
        "Authorization": 'AIzaSyAhXPCHblvWTzu-adkNsu9R_61HPwpkq8o',
        "Content-Type": 'application/json'
      }
    }
  
  fetch(url, options)
  .then(res =>{
    if(!res.ok){
      throw new Error('Something went wrong');
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {
    this.setState({
      books: data,
      error: null
    });
  });
}

render(){
  <Header />
  <Search />
  <Filterm/>
  <List />
}
}


export default App;