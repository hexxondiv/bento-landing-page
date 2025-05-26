import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tablet, Desktop } from "../Responsive";


const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;

  .mobile-banner {
    display: grid;
    grid-template-columns: 100%;
    pasding: 30px;
    position: relative;
    margin-bottom: 30px;
    ${Tablet({ gridTemplateColumns: "65% 35%" })}
  }
  .mobile-banner .bg {
    position: absolute;
    background: linear-gradient(
      180deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 62.92%
    );
    box-shadow: 0px 4px 18px 5px rgba(0, 0, 0, 0.31);
    border-radius: 50px;
    width: 96%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    ${Tablet({ width: "96%", height: "70%" })}
  }
  .mobile-banner .mobile1 {
    margin: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    ${Tablet({ marginLeft: "50px" })}
  }
  .mobile-banner .mobile1 h3 {
    color: var(--primary-color);
    font-weight: 700;
    font-size: 34px;
  }
  .mobile-banner .mobile1 .desc2 {
    ${Desktop({ width: "600px" })}
  }
  .mobile-banner .mobile1 .download {
    display: flex;
    align-items: center;
    flex-direction: column;
    ${Tablet({
  flexDirection: "row",
  justifyContent: "flex-start",
  marginTop: "40px"
})}
  }
  .mobile-banner .mobile1 .download h5 {
    font-weight: 700;
  }
  .mobile-banner .mobile2 {
    height: 60vh;
    ${Tablet({ height: "80vh" })}
  }
  .mobile-banner .mobile2 img {
    height: 100%;
    width: 100%;
    object-fit: contain;
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
  }
  `

function Mobile() {
  return (
    <Wrapper>
      <div className="mobile-banner">
        <div className="bg"></div>
        <div className="mobile1">
          <h3 className="mb-3">Download the Mobile App</h3>
          <p className="mb-2 ">
            Feeling hungry ? Too exhausted to prepare a meal ?
          </p>
          <p className="desc2">
            Download the mobile app now and experience the joy of having your favourite food delivered to your
            doorstep within minutes, Discover Convenience!{" "}
          </p>
          <div className="download">
            <h5>Download Now and Order!</h5>
            <div className="playstore">
              <div className="g-store me-3 store">
                <Link to="https://play.google.com/store/apps/details?id=com.bentodelivaz.app" target="_blank">
                  <img src="/images/g-store.png" alt="playstore" />
                </Link>
              </div>
              <div className="a-store me-3 store">
                <Link to="https://apps.apple.com/ng/app/bento-delivaz-app/id6553946055" target="_blank">
                  <img src="/images/a-store.png" alt="applestore" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile2">
          <img src="/images/mobile1.png" alt="mobile" />
        </div>
      </div>


    </Wrapper>
  )
}

export default Mobile
