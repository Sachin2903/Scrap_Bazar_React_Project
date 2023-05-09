import "./navbar.css";
import logo from "../../../image/ScrapLogo.png";
import { Fragment } from "react";
export function Navbar() {
  return (
    <Fragment>
      <header id="nav">
        <a className="navlogo" href="#nav">
          <img src={logo} alt="logo Loading..." />
        </a>

        <ul className="navlist">
          <li>
            <a href="#section">HOME</a>
          </li>
          <li>
            <a href="#PRICES">PRICE</a>
          </li>
          <li>
            <a href="#ABOUT">ABOUT</a>
          </li>
          <li>
            <a href="#detail">CONTACT</a>
          </li>
        </ul>
      </header>
    </Fragment>
  );
}
