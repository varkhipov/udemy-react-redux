import React, { Component } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';


class StreamShow extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { streamId } = this.props.match.params;
    this.props.fetchStream(streamId);
    this.initPlayer();
  }

  componentDidUpdate() {
    this.initPlayer();
  }

  initPlayer() {
    // init player when the stream is already fetched to redux store
    if (this.player || !this.props.stream) {
      return;
    }

    const { streamId } = this.props.match.params;

    // follow OBS configuration from readme: https://github.com/illuspas/Node-Media-Server
    this.player = flv.createPlayer({
      type: 'flv',
      url: 'http://localhost:8000/live/' + streamId + '.flv'
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    // this.player.play();
  }

  // Used to force stop receiving stream video data after navigation out of the stream page
  // See: [MSEController] > MediaSource onSourceEnded
  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  }

  renderContent() {
    if (!this.props.stream) {
      return (
        <div>Loading...</div>
      )
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
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
)(StreamShow);
