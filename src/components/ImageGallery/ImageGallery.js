import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const  ImageGallery = ({items, searchName, onClick}) => {
    return (
        <div>
            <ul className='ImageGallery'>
                {items.map(({id, webformatURL, largeURL}) => (
                    <li className='ImageGalleryItem' key={id}>
                        <ImageGalleryItem
                        webformatURL={webformatURL}
                        searchName={searchName}
                        largeURL={largeURL}
                        onClick={onClick}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ImageGallery;