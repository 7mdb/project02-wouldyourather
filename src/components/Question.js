import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

function Question(props) {
  const { username, avatarURL, qId, optionOne } = props;
  return (
    <Card>
      <Card.Header>
        <strong>
          <span> {username} asks:</span>
        </strong>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md="auto">
            <img
              className="avatar"
              src={avatarURL}
              alt={`${username}'s icon`}
            ></img>
          </Col>
          <Col>
            <strong>
              <div>Would you rather </div>
            </strong>
            <div>{optionOne}</div>
            <div>OR ...</div>
            <Button
              as={Link}
              to={`/questions/${qId}`}
              variant="primary"
              className="btn-block"
            >
              View Poll
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

function mapStateToProps(state, { id }) {
  const user = state.users[state.questions[id].author];
  return {
    username: user.name,
    avatarURL: user.avatarURL,
    qId: id,
    optionOne: state.questions[id].optionOne.text
  };
}

export default connect(mapStateToProps)(Question);
