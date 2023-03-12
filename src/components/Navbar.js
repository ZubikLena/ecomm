import { Component, Link } from "react";
import "./NavbarStyles.css";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img src={require("../imgs/bk_logo.JPG")} />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
