import React, { Component } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

import { Button, Dropdown, Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="small">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
        {this.context.state.given_name && (
          <Dropdown item text="Menu">
            <Dropdown.Menu>
              {/* {this.context.state.given_name && ( */}
                <Link to={{ pathname: `/le/${this.context.state.username}` }}>
                  {" "}
                  <Dropdown.Item>
                    {this.context.state.given_name}
                  </Dropdown.Item>{" "}
                </Link>
              {/* )} */}
              {/* {this.context.state.given_name && ( */}
                <Link to="/le/calendario">
                  {" "}
                  <Dropdown.Item>Calendario</Dropdown.Item>
                </Link>
              {/* )} */}
              {/* {this.context.state.given_name && ( */}
                <Dropdown.Item onClick={this.context.logout}>
                  Sair
                </Dropdown.Item>
              {/* )} */}
              {/* {this.context.state.given_name && <Dropdown.Item> <S.ThumbNail src={this.context.state.picture} /></Dropdown.Item> } */}
            </Dropdown.Menu>
          </Dropdown>
            )}
          {!this.context.state.given_name && (
            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
    );
  }
}
Navbar.contextType = AppContext;
