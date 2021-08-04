import { React } from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navLinks}>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/products">Products</Link>
          </li>
          <li>
          <Link to="/contact-us">contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
