import React, { Component } from 'react';

class ImageCard extends Component {
  render() {
    const { description, urls } = this.props.image;

    // className="ui small spaced image"
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
