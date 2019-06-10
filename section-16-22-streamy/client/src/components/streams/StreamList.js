import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';


class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div key={stream.id} className="item">
          {this.renderEditButtons(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link className="header"
                  to={"/streams/" + stream.id}
            >
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  renderEditButtons(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={'/streams/edit/' + stream.id} className="ui button primary">Edit</Link>
          <Link to={'/streams/delete/' + stream.id} className="ui button negative">Delete</Link>
        </div>
      )
    }
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create new stream
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Available Streams:</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    streams: Object.values(state.streams), //convert object to array for easier mapping inside a component
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
