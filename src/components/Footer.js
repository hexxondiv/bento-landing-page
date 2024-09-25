import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tablet } from "../Responsive";

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;

  .items {
    display: grid;
    grid-template-columns: 100%;
    ${Tablet({
  gridTemplateColumns: "30% 30% 30%",
  justifyContent: "space-between"
})}
  }
  .item1,
  .item2,
  .item3 {
    margin-bottom: 20px;
  }
  .img-container {
    padding: 20px 30px;
  }

  .footer-logo {
    width: 170px;
    height: 70px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
  }

  .icon {
    background: white;
    color: var(--primary-color);
    height: 20px;
    width: 20px;
    border-radius: 50%;
    padding: 10px;
    margin-right: 20px;
  }
  .playstore {
    display: flex;
  }
  .store {
    width: 80px;
    height: 25px;
    ${Tablet({ width: "150px", height: "40px" })}
  }
  .store img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
    border: 2px solid white;
  }
  .privacy {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="img-container">
        <img src="/images/brand2.png" alt="brand" className="footer-logo" />
      </div>
      <div className="items px-4">
        <div className="item1">
          <h3>Company</h3>
          <p>Bentodelivaz - e-commerce and logistics</p>
          <p>
            Motto - Discover a new level of efficiency
          </p>

        </div>
        <div className="item2">
          <h3 className="text-md-center">Quick Links</h3>
          <div className="d-md-flex justify-content-between">
          <span>
          <p>
            <Link to="/about-us"> About US</Link>
          </p>
          <p>
            <Link to="/#partner">Partner with Us</Link>
          </p>
          <p>
            <Link to="/contact"> Contact Us </Link>
          </p>
          <p>
            <Link to="https://bentodelivaz.com/remove-account"> Removing Account </Link>
          </p>
         
          </span>
          <span>
          <p>
            <Link to="/terms-and-conditions"> Terms & Conditions</Link>
          </p>
          <p>
            <Link to="/privacy-policy"> Privacy Policy </Link>
          </p>
          <p>
            <Link to="/cancellation-policy"> Cancellation Policy </Link>
          </p>
           <p>
            <Link to="/refund-policy"> Refund Policy </Link>
          </p>
          </span>
          </div>

        </div>
        <div className="item3">
          <h3> Keep in Touch </h3>
          <div className="icons my-5">
            <Link to="https://facebook.com/BentoDelivazApp" target="_blank" className="">
              <i className="icon fa-brands fa-facebook"> </i>
            </Link>
            <Link to="https://www.instagram.com/bento_delivaz" target="_blank" className="">
              <i className="icon fa-brands fa-instagram"> </i>
            </Link>
            <Link to="https://twitter.com/BentoDelivaz" target="_blank" className="">
              <i className="icon fa-brands fa-x-twitter"> </i>
            </Link>

          </div>
          <div className="playstore">
            <div className="g-store me-3 store">
              <Link to="https://onelink.to/dz6xe6" target="_blank">
                <img src="/images/g-store.png" alt="playstore" />
              </Link>
            </div>
            <div className="a-store me-3 store">
              <Link to="#" target="_blank">
                <img src="/images/a-store.png" alt="playstore" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy">
        <p>All Right reversed &copy; Bentodelivaz Ltd 2024{" "}</p>
      </div>
    </Wrapper>
  );
}

export default Footer;
