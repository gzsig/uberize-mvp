import axios from 'axios';
const { crpt } = window.localStorage;
const server = axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
  headers: { authorization: crpt }
});

export default server;
