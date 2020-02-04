import React, { Component } from 'react';
import server from '../resources/axios';

class Home extends Component {
  handleClick = (event) => {
    server.get('/auth')
      .then(res => {
        console.log(res.data);
        window.location.assign(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        Home
        <button onClick={this.handleClick}>login</button>
      </div>
    )
  }
}



export default Home;