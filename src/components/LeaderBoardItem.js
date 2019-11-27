import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Card, Row } from "react-bootstrap";

class LeaderBoardItem extends Component {
  render() {
    const {
      username,
      avatarURL,
      askedQuestions,
      answeredQuestions
    } = this.props;
    const score = askedQuestions + answeredQuestions;
    return (
      <Row className=" p-3 m-3 border">
        <Col md={3} className="align-items-center justify-content-center">
          <img
            className="avatar"
            src={avatarURL}
            alt={`${username}'s icon`}
          ></img>
        </Col>
        <Col md={6}>
          <Row>
            <h4>{username}</h4>
          </Row>
          <br />
          <Row>
            <Col md="auto">Answered Questions</Col>
            <Col className="text-right">
              <strong>{answeredQuestions} </strong>
            </Col>
          </Row>
          <Row>
            <Col md="auto">Created Questions</Col>
            <Col className="text-right">
              <strong>{askedQuestions}</strong>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Header>Score</Card.Header>
            <Card.Body>
              <h3>{score}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, { id }) {
  const user = state.users[id];
  return {
    username: user.name,
    answeredQuestions: Object.keys(user.answers).length,
    askedQuestions: user.questions.length,
    avatarURL: user.avatarURL
  };
}

export default connect(mapStateToProps)(LeaderBoardItem);
