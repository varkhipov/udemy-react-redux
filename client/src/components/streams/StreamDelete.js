import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import { connect } from 'react-redux';
import history from '../../utils/routerHistory';
import { fetchStream, deleteStream } from '../../actions';


class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.streamId);
  }

  // <React.Fragment> doesn't produce any dom element
  // in that way it allows to return multiple elements without any wrapper elements like <div>
  // empty tag <> may also be an equivalent for <React.Fragment>
  renderActions() {
    const streamId = this.props.match.params.streamId;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(streamId)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }
    return 'Are you sure you want to delete stream: ' + this.props.stream.title + '?';
  }

  render() {
    return (
      <Modal
        header="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
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
  { fetchStream, deleteStream }
)(StreamDelete);
