import React, { Component } from 'react';

import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'


import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state; 
    // const monsters = this.state.monsters

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    )
  }
}

export default App

