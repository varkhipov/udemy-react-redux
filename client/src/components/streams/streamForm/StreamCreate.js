import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../../actions';
import StreamForm from './StreamForm'


class StreamCreate extends Component {
  // create stream in api server database
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h2>Create a Stream</h2>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
