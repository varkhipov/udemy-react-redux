import React, { Component } from 'react';
import Container from '../container/Container';
import SearchBar from './searchBar/SearchBar';
import ImageList from './imageList/ImageList';
import Unsplash from '../../api/Unsplash';

class App extends Component {
  state = { images: [] };

  // Arrow function could be used to handle 'this' correctly via automatic binding
  onSearchBarSubmit = async (searchString) => {
    const response = await Unsplash.get('/search/photos', {
      params: {
        query: searchString
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <Container>
        <div>
          <SearchBar onSubmit={this.onSearchBarSubmit} />
          {this.state.images.length} images found.
          <ImageList images={this.state.images} />
        </div>
      </Container>
    );
  }
}

export default App;
