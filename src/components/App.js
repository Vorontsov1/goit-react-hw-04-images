import React, { useState, useEffect } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import {Searchbar} from './Searchbar/Searchbar';
import {Modal} from './Modal/Modal';
import  * as API from '../services/api';
import './App.css';



export const App = () => {
 const [page, setPage] = useState(1);
 const [searchName, setSearchName] = useState('');
 const [largeImage, setLargeImage] = useState('');
 const [items, setItems] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);




  useEffect(() => {
   if(searchName !== '') {
    getImages(searchName, page);
   }
  }, [searchName, page])


  const handleFormSubmit = (newSearchName) => {
    if(newSearchName.trim().length === 0) {
      alert('Please, enter request');
      return
    }
    setSearchName(newSearchName);
    setPage(1);
    setItems([]);
    }


  const getImages = async (searchName, page) => {
    try {
      setIsLoading(true);
      const images = await API.loadImage(searchName, page);
      setItems(prevState => [...prevState, ...images]);
      setIsLoading(false);
      
      if (images.length === 0) {
        alert("Sorry, we can't find anyting for your request. Please, enter another request");
        }
      } catch (error) {
        setError(error.message);
        } finally {
        setIsLoading(false) 
      }
    };
    
  
 

    return (
      <div className="App">
      <Searchbar onSubmit={handleFormSubmit} isLoading={isLoading}/>
      {error && <p>{error}</p>}
       {items.length > 0 &&  <ImageGallery items={items}  onClick={setLargeImage} />}
       {isLoading && <Loader />}
       {items.length > 0 && <Button onLoadMore={() => setPage(prev => prev + 1)} isLoading={isLoading}/>}
       {largeImage && (<Modal onClose={() => setLargeImage('')} url={largeImage} />)}
     </div>
    );
  };



//   import React, { Component } from 'react';
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