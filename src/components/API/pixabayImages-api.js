import axios from 'axios';
import PropTypes from 'prop-types';

const KEY = '31783345-18b5ac2b353c5eba4d5cdf805';
const BASE_URL = 'https://pixabay.com/api';

async function fetchPictures(query, page) {
    const url = `${BASE_URL}/?key=${KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`;

    const { data } = await axios.get(url);
  
    return data;
  }

  fetchPictures.propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  };
  
  export default fetchPictures;
