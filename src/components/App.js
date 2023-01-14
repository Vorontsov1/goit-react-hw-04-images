// import React, { Component } from 'react';
// import Button from './Button/Button';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Loader from './Loader/Loader';
// import Searchbar from './Searchbar/Searchbar';
// import Modal from './Modal/Modal';
// import  * as API from '../services/api';
// import './App.css';



// export default class App extends Component {
 

//   state = {
//     page: 1,
//     searchName: '',
//     largeImage: '',
//     items: [],
//     isLoading: false,
//     error: null,
//   }

//   openModalOpen = ({target}) => {
//     this.setState({
//       largeImage: target.dataset.src,
//     })
//   }

//   onModalClose = () => {
//     this.setState({
//       largeImage: '',
//     })
//   }

//   handleFormSubmit = (searchName) => {
//     if(searchName.trim().length === 0) {
//       alert('Please, enter request');
//       return
//     }

//     this.setState({
//       searchName,
//       page: 1,
//       items: [],
//     })
//   }

//   handleLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }))
//   }

//   getImages = async (searchName, page) => {
//     try {
//       this.setState({
//         isLoading: true,
//       });
//       const images = await API.loadImage(searchName, page);

//       this.setState(prevState => ({
//         items: [...prevState.items, ...images],
//         isLoading: false,
//       }));
//       if (images.length === 0) {
//         alert("Sorry, we can't find anyting for your request. Please, enter another request");
//         }
//       } catch (error) {
//         this.setState({
//           error: error.message,
//         })
//       }  finally {
//         this.setState({
//           isLoading: false,
//         });
//       }
//     };
  
//     componentDidUpdate (_, prevState) {
//       if (prevState.page !== this.state.page || 
//          prevState.searchName !== this.state.searchName) {
//         this.getImages(this.state.searchName, this.state.page);
//       }
//     }



//   render() {
//     const { items, largeImage, isLoading, error} = this.state;

//     return (
//       <div className="App">
//               <Searchbar onSubmit={this.handleFormSubmit} isLoading={isLoading}/>
//               {error && <p>{error}</p>}
//                {items.length > 0 &&  <ImageGallery items={items}  onClick={this.openModalOpen} />}
//                {isLoading && <Loader />}
//                {items.length >= 12 && <Button onClick={this.handleLoadMore} isLoading={isLoading}/>}
//               {largeImage && (<Modal onClose={this.onModalClose} url={largeImage} />)}
//              </div>
//     );
//   }
// }


import { useState, useEffect } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import {Searchbar} from './Searchbar/Searchbar';
import {Modal} from './Modal/Modal';
import * as API from '../services/api';
import './App.css';

  export const App = () => {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [largeImage, setLargeImage] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(searchName === '') {
      return
    }
    getImages(searchName, page);
       
 
  }, [page, searchName]);

  const getImages = async (searchName, page) => {
    try {
      setIsLoading(true);
      const images = await API.loadImage(searchName, page);

      setItems(prev => [...prev, ...images]);
      setIsLoading(false);
      if (images.length === 0) {
        alert("Sorry, we can't find anyting for your request. Please, enter another request");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const openModalOpen = ({ target }) => {
    setLargeImage(target.dataset.src);
  }

  const onModalClose = () => {
    setLargeImage('');
  }

  const handleFormSubmit = name => {
    if (name.trim() === '') {
      alert('Please, enter request');
      setItems([]);
      setPage(1);

    } if (name !== searchName) {
      setSearchName(name);
      setItems([]);
      setPage(1);
    }  else {
      setSearchName(name);
    }

  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }

 

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} isLoading={isLoading} />
      {error && <p>{error}</p>}
      {items.length > 0 && <ImageGallery items={items} onClick={openModalOpen} />}
      {isLoading && <Loader />}
      {items.length >= 12 && <Button onClick={handleLoadMore} isLoading={isLoading} />}
      {largeImage && <Modal onClose={onModalClose} url={largeImage} />}
    </div>
  );
}


