import axios from 'axios';
const server = (crpt) => axios.create({
  baseURL: 'http://localhost:3001/',
  withCredentials: true,
  headers: { authorization: crpt }
});

export default server;
