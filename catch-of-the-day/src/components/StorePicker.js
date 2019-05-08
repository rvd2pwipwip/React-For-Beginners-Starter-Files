import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  state = {};

  goToStore(e) {
    //1. stop the form from submitting
    e.preventDefault();
    //2. get the text from that input
    console.log(e);
    // const storeName =
    //3. go to page /store/----
  }

  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
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
