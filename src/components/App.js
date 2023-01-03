import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import  * as API from '../services/api';
import './App.css';



export default class App extends Component {
 

  state = {
    page: 1,
    searchName: '',
    largeImage: '',
    items: [],
    isLoading: false,
    error: null,
  }

  openModalOpen = (url) => {
    this.setState({
      largeImageURL: url,
    })
  }

  onModalClose = () => {
    this.setState({
      largeImageURL: '',
    })
  }

  handleSubmit = (searchName) => {
    if(searchName.trim().length === 0) {
      alert('Please, enter request');
      return
    }

    this.setState({
      searchName,
      page: 1,
      items: [],
    })
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  getImages = async (searchName, page) => {
    try {
      this.setState({
        isLoading: true,
      });
      const images = await API.loadImage(searchName, page);

      this.setState(prevState => ({
        items: [...prevState.items, ...images],
        isLoading: false,
      }));
      if (images.length === 0) {
        alert("Sorry, we can't find anyting for your request. Please, enter another request");
        }
      } catch (error) {
        this.setState({
          error: error.message,
        })
      }  finally {
        this.setState({
          isLoading: false,
        });
      }
    };
  
    componentDidUpdate (_, prevState) {
      if (prevState.page !== this.state.page || 
         prevState.searchName !== this.state.searchName) {
        this.getImages(this.state.searchName, this.state.page);
      }
    }



  render() {
    const { items, largeImageURL, searchName, isLoading, error} = this.state;

    return (
      <div className="App">
              <Searchbar onSubmit={this.handleSubmit} isLoading={isLoading}/>
              {error && <p>{error}</p>}
               <ImageGallery
                 items={items}
                 searchName={searchName}
                 onClick={this.openModalOpen}
               />
               {isLoading && <Loader />}
               {items.length >=12 && <Button onClick={this.handleLoadMore} />}
              {largeImageURL && <Modal onClose={this.onModalClose} url={largeImageURL} />}
             </div>


      // <div className="App">
      //   <Searchbar onSubmit={this.handleSubmit} isLoading={isLoading}/>
      //   {error && <p>{error}</p>}
      //   {items.length > 0 && 
      //   <ImageGallery items={items} onClick={this.openModalOpen}/> }
      //  { isLoading && <Loader />}
      //  {items.length > 0 && <Button onClick={this.handleLoadMore} isLoading={isLoading}/>}
      //  {largeImageURL && <Modal onClose={this.onModalClose} url={largeImageURL} />}
      // </div>
    );
  }
}
