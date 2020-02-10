import axios from 'axios';

const server = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
})

export default server;