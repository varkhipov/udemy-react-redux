// import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

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
        <div className="ui container comments" style={{ marginTop: "5px" }}>
          Error: { this.state.errorMessage }
        </div>
      )
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div className="ui container comments" style={{ marginTop: "5px" }}>
          Latitude: { this.state.lat }
        </div>
      )
    }
    return (
      <div className="ui container comments" style={{ marginTop: "5px" }}>
        Loading...
      </div>
    )
  }
}

// Take React Component and show in on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);

