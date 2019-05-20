import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>No songs selected</div>;
  }

  return (
    <div className="song-detail">
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
};

export default connect(mapStateToProps)(SongDetail);
