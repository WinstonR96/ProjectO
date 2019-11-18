import React, { Component } from "react";
import "./../../App.css";

class Header extends Component{

  render(){
    return(
      <div className={"header"}>
        <div className={"logo"}>
          Olimpica
        </div>
        <div className={"menu"}>
          Menu
        </div>
      </div>
    );
  }
}

export default Header;