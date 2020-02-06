import React, { Component } from 'react';
import server from '../../resources/axios';
import queryString from 'query-string';

class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      user: {}
    }
  }
  componentDidMount() {
    const query = queryString.parse(this.props.location.search)
    server.post('/auth', {
      code: query.code
    }).then(res => {
      if (res.status === 200) {
        this.setState(
          { loading: false,
          user: res.data }
        )
        console.log(res);
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.loading ?
          (<p>loading</p>) : (
            <div>
            {this.state.user.given_name} 
            <button onClick={()=>{server.get('/')}}>teste</button>
            </div>
            )
        }
      </div>
    )
  }
}



export default Loader;