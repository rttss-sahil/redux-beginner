import React, { Component } from "react";

import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { decrementNumber, incrementNumber } from "../actions";

class Number extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <p>{this.props.num}</p>
        </div>
        <div className="text-center">
          <Button
            variant="primary"
            onMouseDown={() => this.props.dispatch(incrementNumber)}
          >
            Increment
          </Button>
          <Button
            variant="warning"
            onMouseUp={() => this.props.dispatch(decrementNumber)}
          >
            Decrement
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    num: state.num,
  };
};

export default connect(mapStateToProps)(Number);
