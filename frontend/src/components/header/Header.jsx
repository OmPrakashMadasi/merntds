import React, { useState, useEffect } from "react";
import "./Header.css"; // Make sure your CSS file includes the necessary style
import logo from "../../assets/images/trishoka.png";
import { Link } from "react-router-dom";
import Cursor from "../../Cursor/Cursor";

export default function Header(props) {

  useEffect(() => {
    // alert('footer component mountain')
  }, []);

  const navLinks = ["Services", "Blogs", "AboutUs", "Careers", "Company Insights", "ROAS", "ContactUs"];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid" style={{ marginLeft: '4%' }}>
          <Link to="/">
            <img src={logo} width="70px" alt="Trishoka" />
          </Link>

          <div className="text-center navbar-text">
            <h1 className="mb-2" style={{ fontFamily: 'system-ui' }}>TRISHOKA</h1>
            <p className="mb-0" style={{ fontFamily: 'system-ui', whiteSpace: 'nowrap' }}>
              Digital Services
            </p>

          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
            style={{ marginLeft: "10%" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "whitesmoke", fontFamily: 'system-ui' }}
                >
                  Home
                </Link>
              </li>
              {navLinks.map((navlink, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to={`/${navlink.toLowerCase()}`} style={{ fontFamily: 'system-ui' }}>
                      {navlink}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
