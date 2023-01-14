import  { useState } from "react";
import PropTypes from 'prop-types';


export const Searchbar = ({onSubmit}) => {
    
    const [imgName, setImgName] = useState('');
    

   const handleChangeName = e => {
        setImgName(e.currentTarget.value.toLowerCase())
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(imgName);
        // setImgName('');
     };


   
        return (
            <header className="Searchbar">
                <form
                    className='SearchForm'
                    onSubmit={handleSubmit}>
                  <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                  </button>


                    <input
                        className='SearchForm-input'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChangeName}
                        value={imgName}
                    />
                </form>
            </header>
        );
    }


    Searchbar.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
        
