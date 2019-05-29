import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';


// <Route path="/streams/edit/:streamId" .../>
// props -> match.params.streamId
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.streamId)
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>Edit Stream with id: {this.props.match.params.streamId}</h2>
        Stream Edit
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.streamId]
  }
}

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamEdit);
