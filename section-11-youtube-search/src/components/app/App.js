import React, { Component } from 'react';
import Container from '../container/Container';
import SearchBar from './searchBar/SearchBar';
import YouTube from '../../api/YouTube';
import VideoList from './videoList/VideoList';
import VideoDetail from './videoDetail/VideoDetail';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('Hello world!');
  }

  onSearchSubmit = async searchString => {
    const response = await YouTube.get('/search', {
        params: {
          type: 'video',
          q: searchString
        }
      }
    );

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  };

  render() {
    return (
      <Container>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onSearchSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="six wide column">
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;
