import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    const { signedInUser } = this.props;
    const signedIn = signedInUser !== null;
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Would You Rather</Navbar.Brand>
          {signedIn && (
            <Nav className="mr-auto" defaultActiveKey="#Home">
              <Nav.Item>
                <Nav.Link href="#Home" as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/add">
                  New Question
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/leaderboard">
                  Leader Board
                </Nav.Link>
              </Nav.Item>
            </Nav>
          )}
          {signedIn && (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Signed in as: {signedInUser.name} </Navbar.Text>
              <img
                className="login-avatar pl-1"
                src={signedInUser.avatarURL}
                alt="signed in avatar"
              ></img>
              <Nav.Item className="px-2">
                <Button as={Link} to="/logout" variant="outline-primary">
                  Sign out
                </Button>
              </Nav.Item>
            </Navbar.Collapse>
          )}
        </Navbar>
      </div>
    );
  }
}
