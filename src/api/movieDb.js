import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params:{
    api_key: 'b81a990598f52450eb9f9ab81027dc56',
  }
});