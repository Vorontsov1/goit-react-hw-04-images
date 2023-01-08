import React from 'react';

const Button = ({onClick, isLoading}) => {
    return (
        <div className='LoadMoreButton'>
          <button 
          type='button' 
          className='Button' 
          onClick={onClick}
          disabled={isLoading}>
              Load more
          </button>
        </div>
    );
};

export default Button;

