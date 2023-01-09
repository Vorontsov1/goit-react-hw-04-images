import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default Button;

