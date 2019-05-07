import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">of</span>
              <span className="The">the</span>
            </span>
            Day
          </h1>
          <h3 className="tagline">
            <span>Fresh Seafood Market</span>
          </h3>
        </header>
      </>
    );
  }
}

export default Header;
