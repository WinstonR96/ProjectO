import React, { Component } from "react";
import "./../../App.css";
import { IoIosMenu } from "react-icons/io";

class Header extends Component {
  render() {
    return (
      <div className={"header"}>
        <div className={"logo"}></div>
        <div className={"menu"}>
          <IoIosMenu />
          Menu
        </div>
      </div>
    );
  }
}

export default Header;
