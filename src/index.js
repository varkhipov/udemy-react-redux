// import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';

// create React Component
class App extends React.Component {
  constructor(props) {
    super(props);

    // the only time where direct assignment is done, otherwise this.setState({}) should be used
    this.state = { lat: null, errorMessage: '' };

    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <Container>Error: { this.state.errorMessage }</Container>
      )
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <Container>Latitude: { this.state.lat }</Container>
      )
    }
    return (
      <Container>Loading...</Container>
    )
  }
}

// Take React Component and show in on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);

