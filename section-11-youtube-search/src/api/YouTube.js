import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyCnT6VpY1dTDeJ42EUcfJK6fyZFHSBiQzU"
  }
});
