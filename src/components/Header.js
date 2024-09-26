import React from "react";
import styled from "styled-components";
import { Tablet } from "../Responsive";
import { HashLink as Link } from "react-router-hash-link";

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;

  .navbar{
    background: white;
  }

  .first-nav {
    ${Tablet({
  background: "#ffffff",
  borderRadius: "30px",
  padding: "4px",
  paddingRight: "20px",
  paddingLeft: "20px"
})}
  }
  .first-nav li a {
    color: var(--primary-color);
    font-weight: 500;
  }
`;

function Header() {
  return (
    <Wrapper className="sticky-top">
      <nav className="navbar navbar-expand-sm sticky-top navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className=""
              src="/images/brand.png"
              alt="brand"
              height="50"
              width="120"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  first-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/#home">
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/#about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="https://app.bentodelivaz.com" target="_blank">
                  Web App
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#partner">
                  Become a Partner
                </Link>
              </li>
              
          <li className="nav-item">
                <Link className="nav-link" to="/help-and-support">
                  Help and Support
                </Link>
              </li> 
               </ul>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Header;
