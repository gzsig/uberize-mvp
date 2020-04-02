import React, { Component } from "react";
import * as S from "./style";
import * as G from "../../resources/globalStyle";
import appContext from "../../context/AppContext";
import { Button, Card, Image } from "semantic-ui-react";

class GoogleAuth extends Component {
  handleLogInClick = () => {
    window.location.assign(`${process.env.REACT_APP_BACKEND_URL}/auth/google`);
  };

  render() {
    return (
      <React.Fragment>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={window.location.origin + "/google.png"}
            />
            <Card.Header>Bem vindo!</Card.Header>
            <Card.Meta>Friends of Elliot</Card.Meta>
            <Card.Description>
              Não tem gmail? Sem problemas,{" "}
              <a
                href="https://gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                crie
              </a>{" "}
              um agora!
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button basic color="green" onClick={this.handleLogInClick}>
              Login com Google
            </Button>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
GoogleAuth.contextType = appContext;
export default GoogleAuth;

// import React from 'react'
// // import { Button, Card, Image } from 'semantic-ui-react'

// const CardExampleGroups = () => (
//   <Card.Group>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='/images/avatar/large/steve.jpg'
//         />
//         <Card.Header>Steve Sanders</Card.Header>
//         <Card.Meta>Friends of Elliot</Card.Meta>
//         <Card.Description>
//           Steve wants to add you to the group <strong>best friends</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='/images/avatar/large/molly.png'
//         />
//         <Card.Header>Molly Thomas</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>
//           Molly wants to add you to the group <strong>musicians</strong>
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//     <Card>
//       <Card.Content>
//         <Image
//           floated='right'
//           size='mini'
//           src='/images/avatar/large/jenny.jpg'
//         />
//         <Card.Header>Jenny Lawrence</Card.Header>
//         <Card.Meta>New User</Card.Meta>
//         <Card.Description>
//           Jenny requested permission to view your contact details
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <div className='ui two buttons'>
//           <Button basic color='green'>
//             Approve
//           </Button>
//           <Button basic color='red'>
//             Decline
//           </Button>
//         </div>
//       </Card.Content>
//     </Card>
//   </Card.Group>
// )

// export default CardExampleGroups
