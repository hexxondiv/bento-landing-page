import React from "react";
import { Link } from "react-router-dom";
import About from './../components/About';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="home d-flex justify-content-center align-items-center position-relative text-white bg-dark" style={{ minHeight: '60vh', backgroundImage: 'url("/images/hero.png")', backgroundSize: 'cover' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>
        <div className="text-center">
          <h1 className="display-4 fw-bold mb-3">Delivering Happiness, One Package at a Time</h1>
          <h5 className="mt-4">Get your favorite food and parcels delivered right to your doorstep</h5>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-4" id="about">
        <About />
      </section>

      {/* Partner Section */}
      <section className="partner py-4" id="partner">
        {/* Rider Section */}
        <div className="rider text-center mb-5">
          <h3 className="fw-bold mb-3">Grow With Bento Delivaz</h3>
          <p className="lead">Experience the perks of flexibility, freedom, and competitive earnings when you team up with Bento Delivaz.</p>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="/images/rider.png" className="img-fluid" alt="Rider" />
            </div>
            <div className="col-lg-6 text-lg-start mt-3 mt-lg-0">
              <p className="fw-light">Drive, deliver and earn. Make more money when you become a <span className="fw-bold text-primary">Bento Rider</span>.</p>
              <Link to="https://onelink.to/y8bhhv" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>

        {/* Vendor Section */}
        <div className="vendor text-center mb-5">
          <h3 className="fw-bold mb-3">Become A Vendor</h3>
          <p className="lead">Grow your business and increase profit by Becoming a <span className="fw-bold text-primary">Bento Vendor</span> today!</p>
          <Link to="https://onelink.to/y67ayu" target="_blank" className="btn btn-primary mb-3">Get Started</Link>

          <div className="row">
            <div className="col-lg-6">
              <img src="/images/food3.png" className="img-fluid" alt="Vendor Food 1" />
            </div>
            <div className="col-lg-6">
              <img src="/images/food4.png" className="img-fluid" alt="Vendor Food 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact text-center py-4 bg-light">
        <h2 className="text-primary mb-3">Contact Us</h2>
        <p className="mb-4">If you have questions about our services, send us a message. We will get back to you as soon as possible.</p>

        <h5>Office Hours</h5>
        <p>Opens: Monday - Friday</p>
        <p>08:30am – 5:00pm</p>

        <div className="address row justify-content-center text-start py-4 bg-white shadow-sm rounded">
          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center">
              <span className="me-3 bg-primary text-white p-3 rounded-circle">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div>
                <h4>Office Address</h4>
                <p>NO 30 Howeidy A. Street kado. Abuja, FCT</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center">
              <span className="me-3 bg-primary text-white p-3 rounded-circle">
                <i className="fa-solid fa-phone"></i>
              </span>
              <div>
                <h4>Our Hotline</h4>
                <p>+2349070059320</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="d-flex align-items-center">
              <span className="me-3 bg-primary text-white p-3 rounded-circle">
                <i className="fa-solid fa-envelope-circle-check"></i>
              </span>
              <div>
                <h4>Email Address</h4>
                <p>info@bentodelivaz.com</p>
                <p>bentodelivazltd@gmail.com</p>
                <p>support@bentodelivaz.com</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="https://forms.gle/DiVArPUncrcNY8Rs5" target="_blank" className="btn btn-primary mt-4">Get in Touch</Link>
      </section>
    </>
  );
}

export default Home;
