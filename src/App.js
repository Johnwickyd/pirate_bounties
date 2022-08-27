import './App.css';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { pirates } from "./pirates";
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super ()
    this.state ={
      pirates:pirates,
      searchfield:''
    }
  };

  onSearchChange= (event) => {
    this.setState({searchfield: event.target.value });

  }
  render(){
    const filteredPirates = this.state.pirates.filter(pirate => {
      return pirate.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredPirates)
    return (
      
      <div className ='whole'>
      <img className='marine' src="https://images6.alphacoders.com/864/864493.png"></img>
      <div className ='tc'>
        <h1 className='f2 tc greenish'>Pirates's Bounty list</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList pirates={filteredPirates}/>
      </div>
      </div>

  );
}
}

export default App;
