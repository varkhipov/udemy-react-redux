import React, { Component } from 'react';
import Container from '../container/Container';
import SearchBar from './searchBar/SearchBar';

class App extends Component {
  onSearchBarSubmit(searchString) {
    console.log(searchString);
  }

  render() {
    return (
      <Container>
        <div>
          <SearchBar onSubmit={ this.onSearchBarSubmit } />
        </div>
      </Container>
    );
  }
}

export default App;
