import React, { Component } from 'react';
import server from '../resources/axios';
import queryString from 'query-string';

class Loader extends Component {

  componentDidMount() {
    const query = queryString.parse(this.props.location.search)
    console.log(query);
      server.post('/auth', {
        code: query.code
      })
  }
  render() {
    return (
      <div>
        LOADING
      </div>
    )
  }
}



export default Loader;