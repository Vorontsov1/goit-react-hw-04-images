import React from 'react';

const Searchbar = ({onSubmit}) => {
    return (
    <header class="Searchbar">
  <form className='SearchForm' onSubmit={onSubmit}>
    <button type="submit" class="SearchForm-button">
      <span class="SearchForm-button-label">Search</span>
    </button>

    <input
      className='SearchForm-input'
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      name='searchName'
    />
  </form>
</header>
    );
};
export default Searchbar;