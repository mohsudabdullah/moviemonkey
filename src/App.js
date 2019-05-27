import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

export default class App extends React.Component  {
  constructor()
    {
        super();
        this.state={
            shop:{},
            users:[],
            filtered:[],
            loading:true,
            searchValue:''
        };
        this.handleSearchChange = (searchValue) => {
            this.setState({searchValue});
            this.filter();
          };
    }

    componentDidMount()
        {
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response=>{
                this.state.loading=false
                this.setState({users:response.data})
            });
  
            console.log(this.state.users)

        }
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

