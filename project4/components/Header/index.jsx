import React from "react";
import "./styles.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <img
          src="./components/Header/menu.svg"
          alt="menu"
          onClick={() => window.history.back()}
        />
        <div>CS142 project4</div>
      </header>
    );
  }
}

export default Header;
