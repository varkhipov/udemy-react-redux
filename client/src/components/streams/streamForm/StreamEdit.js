import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../../actions';
import StreamForm from './StreamForm'


// <Route path="/streams/edit/:streamId" .../>
// props -> match.params.streamId
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.streamId);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.streamId, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h2>Edit a Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
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
  { fetchStream, editStream }
)(StreamEdit);
