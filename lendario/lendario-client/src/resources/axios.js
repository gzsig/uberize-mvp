import axios from 'axios';
const server = crpt => {
  if (crpt) {
    return axios.create({
      baseURL: 'https://api-lendario.herokuapp.com/',
      withCredentials: true,
      headers: { authorization: crpt }
    });
  } else {
    return axios.create({
      baseURL: 'https://api-lendario.herokuapp.com/',
      withCredentials: true
    });
  }
};

export default server;
