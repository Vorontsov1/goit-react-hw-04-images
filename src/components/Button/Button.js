import React from 'react';

const Button = ({onLoadMore, isLoading}) => {
    return (
        <div className='LoadMoreButton'>
          <button 
          type='button' 
          className='Button' 
          onClick={onLoadMore}
          disabled={isLoading}>
              Load more
          </button>
        </div>
    );
};

export default Button;

