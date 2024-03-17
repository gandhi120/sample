import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dummyjson.com', //Config.API_URL,
  headers: {
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
  },
  //   cancelToken: cancelSource.getSource().token,
});

export default instance;
