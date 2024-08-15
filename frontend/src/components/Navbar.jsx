import React from "react";
import { Link } from "react-router-dom";
import "../assets/asta.jpeg"

const Navbar = () => {
  return (
    <>
    <div style={{height: '100px'}}>
      <div style={{height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', borderBottom: '1px solid #e2e2e2'}}>
        <Link className="headerlink" to="/">
          <img src="logo.png" alt="Rapid Checkout" align = "left" style={{height: '250px'}}/>
        </Link>
        <div style={{marginLeft: 'auto'}}>
            <Link className="nav-link" to="/" style={{color: 'black'}}>
              Home
            </Link>
            <Link className="nav-link" to="/cart" style={{color: 'black'}}>
              Cart
            </Link>
            <Link className="nav-link" to="/barcode" style={{color: 'black'}}>
            BarcodeSearch
            </Link>
            <Link className="nav-link" to="/aboutus" style={{color: 'black'}}>
              About Us
            </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
