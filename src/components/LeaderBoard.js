import React, { Component } from "react";
import LeaderBoardItem from "./LeaderBoardItem";
import { connect } from "react-redux";
import { Card, Container } from "react-bootstrap";

class LeaderBoard extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Card.Header className="text-center">
            <h5>Leader Board </h5>
          </Card.Header>
          {this.props.ids.map(id => (
            <LeaderBoardItem key={id} id={id} />
          ))}
        </Card>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const users = Object.keys(state.users);
  return {
    ids: users.sort(
      (a, b) =>
        Object.keys(state.users[b].answers).length +
        state.users[b].questions.length -
        (Object.keys(state.users[a].answers).length +
          state.users[a].questions.length)
    )
  };
}

export default connect(mapStateToProps)(LeaderBoard);
