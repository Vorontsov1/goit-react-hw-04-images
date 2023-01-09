import React from "react";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
    webformatURL,
    searchName,
    onClick,
    largeURL,

}) => {
    return (
    <img
    src={webformatURL}
    alt={searchName}
    className='ImageGalleryItem-image'
    onClick={onClick}
    data-src={largeURL}
    />
    );
  };

  ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    searchName: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    largeURL: PropTypes.string,

  }

  export default ImageGalleryItem;