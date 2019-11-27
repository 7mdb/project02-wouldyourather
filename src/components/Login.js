import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { withRouter } from "react-router-dom";
import loginImage from "../react-redux.svg";

/* Bootstrap imports */
import { Card, Image, Button, Form, Row, Container } from "react-bootstrap";

class Login extends Component {
  state = {
    user: null
  };

  setAuthedUser = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.user));
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    this.props.history.replace(from);
  };

  handleUser = e => {
    const val = e.target.value;
    this.setState({ user: val });
  };

  render() {
    const users = Object.keys(this.props.users).map(id => this.props.users[id]);

    return (
      <Container className="justify-content-center">
        <Card className="vertical-center">
          <Card.Header className="text-center">
            <h3>Welcome</h3>
          </Card.Header>
          <Card.Body>
            <Row className="justify-content-md-center">
              <Image
                className="login-image"
                src={loginImage}
                alt="react & redux logo"
                fluid
              />
            </Row>
            <br />
            <Row className="justify-content-md-center">
              <Form onSubmit={this.setAuthedUser}>
                <Form.Group controlId="username">
                  <Form.Label className="justify-content-center">
                    <strong> Sign In</strong>
                  </Form.Label>
                  <Form.Control as="select" onChange={this.handleUser}>
                    <option name="none" key="none" value="">
                      Please select a user
                    </option>
                    {users.length > 0 &&
                      users.map(user => (
                        <option name={user.id} key={user.id} value={user.id}>
                          {" "}
                          {user.name}{" "}
                        </option>
                      ))}
                  </Form.Control>
                </Form.Group>
                <Button className=" btn-block" type="submit">
                  Sign In{" "}
                </Button>
              </Form>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
export default withRouter(connect(mapStateToProps)(Login));
