import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars'
import Pagination from './components/Pagination'
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: '',
      previous: '',
      show: false
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results,next:data.next,previous:data.previous }) 
      }).catch(err => {
        throw new Error(err);
      });
  };

  nextPropagationHandler = ()=>{
    this.getCharacters(this.state.next)
  }

  previousPropagationHandler = ()=>{
    this.getCharacters(this.state.previous)
  }
  render() {
    let previousBtn = null;
    this.state.previous === null ? previousBtn = {display: 'none'} : previousBtn = {display:'inline'}
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWars props={this.state.starwarsChars}/>
        <Pagination previousClicked={this.previousPropagationHandler} nextClicked={this.nextPropagationHandler} previous={previousBtn}/>
      </div>
    );
  }
}

export default App;
