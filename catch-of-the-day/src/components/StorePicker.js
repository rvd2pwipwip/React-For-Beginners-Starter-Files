import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  state = {};

  myInput = React.createRef();

  goToStore = e => {
    //1. stop the form from submitting
    e.preventDefault();
    //2. get the text from that input
    const storeName = this.myInput.current.value;
    //3. go to page /store/----
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            ref={this.myInput}
            type="text"
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
