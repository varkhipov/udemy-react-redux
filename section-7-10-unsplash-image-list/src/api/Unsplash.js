import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5d333dc69e1cac375a26bb034f19e02fb7ece8ea8e6ae79899a1710c1ed14f54',
  },
});
