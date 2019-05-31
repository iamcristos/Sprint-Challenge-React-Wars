import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    dogData: []
  }
  componentDidMount() {
    this.getDogData(`https://dog.ceo/dog-api/#all`)
  }

  getDogData= (url)=> {
      fetch(url)
        .then(res=> res.json())
        .then(res=> this.setState({dogData:res.results}))
        .catch(err=> new Error(err))
  }
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
