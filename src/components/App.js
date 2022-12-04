import axios from 'axios';
import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import './App.css';

const KEY = '31783345-18b5ac2b353c5eba4d5cdf805';

export default class App extends Component {
  state = {
    collection: [],
    image: {},
    searchName: '',
    pageNum: 1,
    showModal: false,
    isLoading: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const searchName = evt.target.searchName.value;
    this.setState(prevState => {
      if (prevState.searchName !== searchName) {
        return {
          collection: [],
          searchName: searchName,
          pageNum: 1,
        };
      } else {
        return {
          pageNum: prevState.pageNum + 1,
        };
      }
    });
  };

  handleLoadMore = () => {
    this.setState(({ pageNum }) => ({
      pageNum: pageNum + 1,
    }));
  };

  getImages = () =>
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.pageNum}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response =>
        this.setState(({ collection }) => ({
          collection: [...collection, ...response.data.hits],
          isLoading: false,
        })),
      )
      .catch(error => console.log(error));

  openImage = ({ target }) => {
    this.setState({
      image: {
        searchName: this.state.searchName,
        src: target.dataset.src,
      },
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName, pageNum, isLoading, image } = this.state;

    if (prevState.searchName !== searchName || prevState.pageNum !== pageNum) {
      this.setState({
        isLoading: true,
      });
      this.getImages();
    }

    if (prevState.isLoading === true && !isLoading) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (prevState.image !== image) {
      this.toggleModal();
    }
  }

  render() {
    const { collection, searchName, isLoading, showModal, image } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          collection={collection}
          searchName={searchName}
          onClick={this.openImage}
        />
        {isLoading ? (
          <Loader />
        ) : (
          collection.length !== 0 && <Button onClick={this.handleLoadMore} />
        )}
        {showModal && <Modal onClose={this.toggleModal} image={image} />}
      </div>
    );
  }
}