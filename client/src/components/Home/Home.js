import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import server from '../../resources/axios';

class Home extends Component {
  handleClick = (event) => {
    server.get('/auth/google', { headers: { 'Access-Control-Allow-Origin': '*' } })
      .then(res => {
        console.log(res.data);
        // window.location.assign(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <Navbar />
        Home
        <button onClick={this.handleClick}>login</button>
      </div>
    )
  }
}



export default Home;