import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Tablet } from "../Responsive";
const ContactWrapper = styled.div`
  .contact{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
  
}
.contact .info{
    display: flex;
    flex-direction: column;
    align-items: center;
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
.contact .form{
    background: var(--primary-color);
    color: white;
    width: 100%;
}
  
.contact .address{
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 10px;
    border-radius: 20px;
    ${Tablet({
  display: 'grid', gridTemplateColumns: '33% 34% 33%', justifyContent: "start", padding: '30px',
  borderRadius: '30px', alignContent: 'start'
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
 .contact .form .touch{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact .form .touch a{
    background: white;
    color: var(--primary-color);
  }
  .contact .form p{
    color: rgba(255, 255, 255, 0.8);
}
.contact h2{
  color: var(--primary-color);
  font-weight: 700; 
}


`;
function ContactInfo() {
  return (<ContactWrapper>
    <section className="contact mt-4" id="contact">
      <div className="p-2 info">
        <h2>Contact Us</h2>
        <p className="my-3">
          We love hearing from you! If you have any questions, suggestions, or feedback, please reach out to us. <br />
          If you have questions about our services, send us a message. We will get back to you as soon as possible.
        </p>
        <h5 className="my-2 mx-1">Office Hours</h5>
        <p>Opens: Monday - Friday</p>
        <p>08:30am – 5:00pm</p>
      </div>
      <div className="form p-2">
        <div className="address">
          <div className="one">
            <span className="me-1"><i className="fa-solid icon fa-location-dot"></i></span>
            <div className="">
              <h4>Office Address</h4>
              <p>No 30 Howeidy A. Street kado. Abuja, FCT </p>
            </div>
          </div>

          <div className="one">
            <span className="me-1"><i className="fa-solid icon fa-envelope-circle-check"></i></span>
            <div className="">
              <h4>Email Address</h4>
              <p>info@bentodelivaz.com</p>
              <p>support@bentodelivaz.com</p>
              <p>hello@bentodelivaz.com</p>
            </div>
          </div>

          <div className="one">
            <span className="me-1"><i className="fa-solid icon fa-phone"></i></span>
            <div className="">
              <h4>Our Hotline</h4>
              <p>+2349070059320</p>

            </div>
          </div>
        </div>
        <div className="m-2 touch">
          <p className="mt-3">You can also fill out our hot service form</p>
          <Link to='https://forms.gle/DiVArPUncrcNY8Rs5' target="_blank" className="my-2" >Get in Touch</Link>
        </div>
      </div>

    </section>
  </ContactWrapper>)
}

export default ContactInfo;
