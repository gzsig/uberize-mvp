import axios from 'axios';
const server = crpt => {
  if (crpt) {
    return axios.create({
      baseURL: 'http://localhost:3001/',
      withCredentials: true,
      headers: { authorization: crpt }
    });
  } else {
    return axios.create({
      baseURL: 'http://localhost:3001/',
      withCredentials: true
    });
  }
};

export default server;
