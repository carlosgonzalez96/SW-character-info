import { Component } from 'react';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      users: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people/?format=json')
      .then(response => 
        response.json())
      .then((data) => this.setState(() => {
        return {users: data.results}
      }
      ));

  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {

    const { users, searchField } = this.state;
    const { onSearchChange } = this;

    const filterUser = users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <h1 className='title'>Star Wars Rolodex</h1>
          <SearchBox 
            onChangeHandler={onSearchChange}
            placeholder='search user'
            className='searchbox'
          />

        <CardList users={filterUser}/>
      </div>
    )
  }
}


export default App;
