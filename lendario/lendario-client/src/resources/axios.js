import axios from 'axios';
const server = crpt => {
  if (crpt) {
    return axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
      withCredentials: true,
      headers: { authorization: crpt }
    });
  } else {
    return axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
      withCredentials: true
    });
  }
};

export default server;
