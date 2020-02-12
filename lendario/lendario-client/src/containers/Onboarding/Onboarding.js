import React, { Component } from 'react'
import { CreateAccount } from '../../components'
import { Wrapper } from "./style"; 

class Onboarding extends Component {
  render(){
    return(
      <Wrapper>
      <CreateAccount />
      </Wrapper>
    )
  }
}

export default Onboarding