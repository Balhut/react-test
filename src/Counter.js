import React from "react";
import { Button } from "reactstrap";

class Increment extends React.Component {
  state = {
    value: 0
  };

  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={() => {
            this.setState({ value: this.state.value + 1 });
          }}
        >
          increment
        </Button>
        <p>{this.state.value}</p>
      </div>
    );
  }
}
export default Increment;
