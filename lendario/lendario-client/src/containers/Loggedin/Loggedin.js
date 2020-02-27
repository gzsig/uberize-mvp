import React, { Component } from 'react'
import AppContext from '../../context/AppContext';

class Loggedin extends Component {
  componentDidMount = async () => {
    await this.context.validateUser();
  };
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


Loggedin.contextType = AppContext
export default Loggedin