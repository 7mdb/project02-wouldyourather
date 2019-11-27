import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { Tabs, Tab, Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container className="justify-contect-md-center container border">
        <Tabs
          defaultActiveKey="unanswered"
          id="home"
          className="nav-pills nav-fill bg-tab-color "
        >
          <Tab eventKey="unanswered" title="Unanswered Questions">
            {this.props.unanswered.length > 0 ? (
              <div>
                {this.props.unanswered.map(id => (
                  <div key={id} className="p-2">
                    <Question key={id} id={id} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="center">
                <h3> You have no unanswered questions </h3>
              </div>
            )}
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            {this.props.answered.length > 0 ? (
              <div>
                {this.props.answered.map(id => (
                  <div key={id} className="p-2">
                    <Question key={id} id={id} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="center">
                <h3> You have no answered questions </h3>
              </div>
            )}
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const user = state.users[state.authedUser];

  const answered = [...Object.keys(user.answers)].sort(
    (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
  );
  const unanswered = [
    ...Object.keys(state.questions).filter(
      question => answered.indexOf(question) < 0
    )
  ].sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);

  return {
    answered: answered,
    unanswered: unanswered
  };
}

export default connect(mapStateToProps)(Home);
