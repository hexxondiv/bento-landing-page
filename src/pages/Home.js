import React from "react";
import styled from "styled-components";
import { Tablet, Desktop } from "../Responsive";
import { Link } from "react-router-dom";
import About from './../components/About';


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

  .contact{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding: 20px;J
}
.contact h2{
    color: rgba(0, 0, 0, 0.5);
    font-weight: 700;
}
.contact h5{
    font-size: 16px;
    ${Tablet({ fontSize: '20px' })}
}
.contact a{
    padding: 5px 10px;
    background: var(--primary-color);
    color: white;
    font-size: 20px;
    font-weight: 500;
    border-radius: 5px;
    text-decoration: none;
}
.contact .address{
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    background: rgba(53, 8, 112, 0.2);;
    grid-gap: 10px;
    border-radius: 20px;
    ${Tablet({
  display: 'grid', gridTemplateColumns: '45% 45%', padding: '30px', borderRadius: '30px'
})}
}
.contact .address .one{
    display: flex;
    align-items: center;
    margin: 5px;
}
.contact .address .one div{
    word-break: break-all;
    margin-left: 10px;
    margin-right: 5px;

}
.contact .address .one p{
    margin: 8px 0;
    font-size: 14px;
    ${Tablet({ margin: '10px 0', fontSize: '16px' })}
    
}
.contact .address .one span{
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.contact h2{
  color: var(--primary-color);
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
                <Link to="https://onelink.to/y8bhhv" className="btn">
                  Get Started
                </Link>
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
                to=" https://onelink.to/y67ayu"
                target="_blank"
                className="btn ms-3"
              >
                Get Started
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
        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <p className="my-3">If you have questions about our services, send us a message.
            We will get back to you as soon as possible.
          </p>
          <h5 className="my-2 mx-1">Office Hours</h5>
          <p>Opens: Monday - Friday</p>
          <p>08:30am – 5:00pm</p>
          <div className="address">
            <div className="one">
              <span className="me-1"><i className="fa-solid icon fa-location-dot"></i></span>
              <div className="">
                <h4>Office Address</h4>
                <p>NO 30 Howeidy A. Street kado. Abuja, FCT </p>
              </div>
            </div>
            <div className="one">
              <span className="me-1"><i className="fa-solid icon fa-phone"></i></span>
              <div className="">
                <h4>Our Hotline</h4>
                <p>+2349070059320</p>

              </div>
            </div>
            <div className="one">
              <span className="me-1"><i className="fa-solid icon fa-envelope-circle-check"></i></span>
              <div className="">
                <h4>Email Address</h4>
                <p>Info@bentodelivaz.com</p>
                <p>Support@bentodelivaz.com</p>
              </div>
            </div>
          </div>
          <Link to='https://forms.gle/DiVArPUncrcNY8Rs5' target="_blanck" className="my-2" >Get in Touch</Link>
        </section>
      </Wrapper>

    </>

  );
}

export default Home;
