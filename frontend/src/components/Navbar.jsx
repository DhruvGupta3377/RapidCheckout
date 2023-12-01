import React from "react";
import { Link } from "react-router-dom";
import "../assets/asta.jpeg"

const Navbar = () => {
  return (
    <>
    <header>
    <img src="https://i.postimg.cc/wjSrzSX7/logo.png" alt="Rapid Checkout" align = "left"/>
    <Link className="headerlink" to="/">
    <h1 align ="center">
    RapidCheckout
    </h1>
    </Link>
    </header>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
        <Link className="nav-link" to="/barcode">
        BarcodeSearch
        </Link>
        <Link className="nav-link" to="/aboutus">
          About Us
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
