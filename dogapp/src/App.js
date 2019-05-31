import React, {Component} from 'react';
import './App.css';
import DogBreed from './component/dogBreed'

class App extends Component {
  state = {
    dogData: []
  }
  componentDidMount() {
    this.getDogData(`https://dog.ceo/api/breeds/list/all`)
  }

  getDogData= (url)=> {
      fetch(url)
        .then(res=> res.json())
        .then(res=> {
          console.log(res)
          this.setState({dogData:res.message})
        })
        .catch(err=> new Error(err))
  }

  render() {
    return (
      <div className="App">
        <DogBreed props={this.state.dogData}/>
      </div>
    );
  }
}

export default App;
