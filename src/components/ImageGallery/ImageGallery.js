import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const  ImageGallery = ({items, searchName, onClick}) => {
    return (
        <div>
            <ul className='ImageGallery'>
                {items.map(({id, webformatURL, largeImageURL}) => (
                    <li className='ImageGalleryItem' key={id}>
                        <ImageGalleryItem
                        webformatURL={webformatURL}
                        searchName={searchName}
                        largeURL={largeImageURL}
                        onClick={onClick}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}



// ImageGallery.propTypes = {
//     items: PropTypes.arrayOf(PropTypes.object),
//     searchName: PropTypes.string,
//     onClick: PropTypes.func.isRequired,
//     id: PropTypes.number,
// };
ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
      })
    ).isRequired,
    searchName: PropTypes.string,
    onClick: PropTypes.func.isRequired
  };
export default ImageGallery;