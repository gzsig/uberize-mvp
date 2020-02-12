import React, { Component } from "react";
import { GoogleAuth } from "../../components";
import { Wrapper } from "./style"; 

class Login extends Component {

  render(){
    return(
      <Wrapper>
      <GoogleAuth search={this.props.location.search} />
      </Wrapper>
    )
  }
}

export default Login