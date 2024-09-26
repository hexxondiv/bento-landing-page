import React from "react";
import styled from "styled-components";
import { Tablet, Desktop } from "../Responsive";
import { Link } from "react-router-dom";
import About from './../components/About';
import ContactInfo from './../components/ContactInfo';


const Wrapper = styled.div`
  min-height: 60vh;
  font-family: "Poppins", sans-serif;

  .home{
    height: 60vh;
    background-image: url("/images/hero.png");
    background-size: cover;
    position: relative;
    z-index: -2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
     ${Tablet({ height: "80vh" })}
}
.home .hero-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
}
.home .hero{
    text-align: center;
}
.home h1{
    font-weight: 700;
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

  .steps h3 {
    text-align: center;
    font-weight: 700;
    font-size: 35px;
  }
  .steps span {
    font-family: "Lora", serif;
    font-style: italic;
    color: var(--primary-color);
  }
  .steps .main-steps {
    height: 65vh;
    background: url("/images/steps.png");
    background-size: cover;
    position: relative;
    width: 100vw;
    ${Tablet({ height: "1200px" })}
  }
  .steps .steps-content {
    position: absolute;
    top: 60%;
    left: 3%;
    ${Tablet({ left: "5%", top: "55%" })}
    ${Desktop({ left: "5%", top: "75%" })}
  }
  .steps .steps-content h5 {
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 700;
    ${Tablet({ fontSize: "25px" })}
  }
  .steps .steps-content p {
    text-align: center;
    font-size: 10px;
    width: 200px;
    ${Tablet({ fontSize: "16px", width: "300px" })}
  }

  .rider h3 {
    text-align: center;
    color: var(--primary-color);
    font-weight: 700;
    margin: 20px 10px;
    ${Tablet({ margin: "30px 10px" })}
  }
  .rider .desc {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    ${Tablet({ width: "60vw" })}
  }
  .rider .main-rider {
    display: grid;
    grid-template-columns: 100%;
    padding: 25px;
    padding-left: 0;
    ${Tablet({ gridTemplateColumns: "60% 40%" })}
  }
  .rider .rider-container {
    height: 50vh;
    ${Tablet({ height: "80vh" })}
    ${Desktop({ height: "100vh" })}
  }
  .rider .rider-container img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .rider .rider-content {
    align-self: center;
    ${Tablet({ alignSelf: "center" })}
  }
  .rider .rider-content p {
    ${Tablet({ fontSize: "18px" })}
  }
  .rider .rider-content a {
    color: white;
    background: var(--primary-color);
    margin-top: 20px;
    font-weight: 700;
  }
  .rider .rider-content span {
    color: var(--primary-color);
    font-weight: 700;
  }

  .vendor {
    display: grid;
    grid-template-columns: 100%;
    // padding: 25px;
    padding-left: 0;
    ${Tablet({ gridTemplateColumns: "30% 70%" })}
  }
  .vendor h3 {
    color: var(--primary-color);
    font-weight: 700;
  }
  .vendor span {
    color: var(--primary-color);
    font-weight: 700;
  }
  .vendor a {
    background-color: var(--primary-color);
    color: white;
    font-weight: 700;
  }
  .vendor .vendor2 {
    height: 60vh;
    ${Tablet({ height: "80vh" })}
  }
  .vendor .vendor2 img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .vendor .vendor1-container {
    height: 40vh;
    margin-top: 20px;
    ${Tablet({ height: "60vh" })}
  }
  .vendor .vendor1-container .img1 {
    height: 100%;
    width: 100%;
    object-fit: contain;
    ${Tablet({ display: "none" })}
  }
  .vendor .vendor1-container .img2 {
    display: none;
    height: 100%;
    width: 100%;
    object-fit: cover;
    // ${Tablet({ display: "block" })}
  }
`;

function Home() {

  return (
    <>
      <Wrapper>
        <section className="home" id="home">
          <div className='hero-bg'></div>
          <div className="hero container">
            <h1 className="mb-3">Delivering Happiness, One Package at a Time</h1>
            <h5 className="mt-4">Get your favorite food and parcels delivered right to your doorstep</h5>
          </div>
        </section>

        <section className="about pt-4" id="about">
          <About />
        </section>

        <section className="partner" id="partner">
          <div className="rider">
            <div className="rider-heading px-3">
              <h3>Grow With Bento Delivaz</h3>
              <p className="desc">
                Experience the perks of flexibility, freedom, and competitive
                earnings when you team up with Bento Delivaz.
              </p>
            </div>
            <div className="main-rider">
              <div className="rider-container">
                <img src="/images/rider.png" alt="rider" />
              </div>
              <div className="rider-content ms-3">
                <p>
                  Drive, deliver and earn. Make more money when you become a{" "}
                  <span>Bento Rider</span>
                </p>
                <div className="">
                <Link to="https://onelink.to/y8bhhv" className="btn">
                  Get Started
                </Link>
                &nbsp;
                <Link to="https://app.bentodelivaz.com" target="_blank" className="btn">
                  Use Web App
                </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="vendor">
            <div className="vendor1">
              <h3 className="ms-4">Become A Vendor</h3>
              <p className="ms-4">
                Grow your business and increase profit by Becoming a{" "}
                <span>Bento Vendor</span> today!
              </p>
              <Link
                to="https://onelink.to/y67ayu"
                target="_blank"
                className="btn ms-3"
              >
                Get Started
              </Link>
               <Link
                to="https://app.bentodelivaz.com"
                target="_blank"
                className="btn ms-3"
              >
                Shop online
              </Link>
              <div className="vendor1-container">
                <img src="/images/food3.png" alt="vendor-food" className="img1" />
                <img src="/images/food4.png" alt="vendor-food" className="img2" />
              </div>
            </div>
            <div className="vendor2">
              <img src="/images/vendor.png" alt="vendor" />
            </div>
          </div>

        </section>
        <ContactInfo/>
      </Wrapper>

    </>

  );
}

export default Home;
