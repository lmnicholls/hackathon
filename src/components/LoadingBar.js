import LoadingBar from "react-redux-loading-bar";
import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <LoadingBar />
      </header>
    );
  }
}
