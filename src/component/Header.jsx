import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ cartAllProduct }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Fixed header with higher z-index */}
        <div className="col-12 bg-primary d-flex justify-content-between px-5 fixed-top shadow" style={{ zIndex: 1000 }}>
          <ul className="d-flex gap-5 align-items-center m-0 p-0 py-3">
            <NavLink
              to="/"
              className="list-unstyled text-light p-0 pointer text-decoration-none"
            >
              HOME
            </NavLink>
            <li className="list-unstyled text-light p-0 pointer">ABOUT</li>
            <li className="list-unstyled text-light p-0 pointer">CONTACT</li>
          </ul>
          <ul className="m-0 p-0 py-3 position-relative">
            <NavLink
              to="/cart"
              className="list-unstyled text-light p-0 pointer"
            >
              <i className="fa-solid fa-cart-shopping fs-3"></i>
            </NavLink>
            {/* Cart item count */}
            <span
              className="count rounded-pill text-light position-absolute top-0 end-0"
              style={{
                backgroundColor: "orange",
                padding: "2px 8px",
                fontSize: "0.9rem",
                right: "-10px",
                top: "5px"
              }}
            >
              {cartAllProduct?.length}
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
