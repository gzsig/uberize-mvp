import React, { Component } from 'react';
import server from '../resources/axios';
import queryString from 'query-string';

class Loader extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    const query = queryString.parse(this.props.location.search)
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