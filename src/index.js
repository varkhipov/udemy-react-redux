// import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// create React Component
class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <Container>
          Error: { this.state.errorMessage }
        </Container>
      )
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <Container>
          <SeasonDisplay lat={ this.state.lat }/>
        </Container>
      )
    }
    return (
      <Spinner message="Waiting location data..."/>
    )
  }
}

// Take React Component and show in on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);

