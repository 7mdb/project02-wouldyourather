import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  };

  handleChange = e => {
    const val = e.target.value;
    const name = e.target.name;
    this.setState(prevState => ({ ...prevState, [name]: val }));
  };

  addQuestion = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    this.props.dispatch(
      handleSaveQuestion(optionOne, optionTwo, this.props.authedUser)
    );
    this.setState({
      optionOne: "",
      optionTwo: "",
      toHome: true
    });
  };

  disabled = () => {
    return !(this.state.optionOne && this.state.optionTwo);
  };

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <Container className="justify-contect-md-center container border">
        <Card>
          <Card.Header className="text-center">
            <h3>New Question </h3>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={this.addQuestion} className="new-question">
              <h5>
                <strong>Would you rather ...</strong>
              </h5>
              <Form.Group className="new-question-body">
                <Form.Control
                  type="text"
                  value={this.state.optionOne}
                  name="optionOne"
                  placeholder="Enter option one text here"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <h5 className="center or-style">
                  <span>OR</span>
                </h5>
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={this.state.optionTwo}
                  name="optionTwo"
                  placeholder="Enter option two text here"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                disabled={this.disabled()}
                variant="primary"
                type="submit"
                className="btn-block"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    authedUser: state.authedUser
  };
}
export default connect(mapStateToProps)(AddQuestion);
