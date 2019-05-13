import React from 'react';

const ImageList = (props) => {
  console.log(props.images);

  const images = props.images.map(({ description, id, urls }) => {
    return (
      <img className="ui small spaced image"
           key={ id }
           src={ urls.regular }
           alt={ description } />
    )
  });

  const wrapperDivStyle = props.images.length > 0 ? "ui segment" : "";

  return (
    <div className={ wrapperDivStyle }>
      { images }
    </div>
  );
};

export default ImageList;
