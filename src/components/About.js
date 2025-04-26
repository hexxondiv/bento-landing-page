import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Desktop, Tablet } from "../Responsive";


const Wrapper = styled.div`
margin: 0;
padding: 0;
font-family: "Poppins", sans-serif;
min-height: 60vh;

.heading{
  display: grid;
  grid-template-columns: 100%;
  ${Tablet({ gridTemplateColumns: '45% 45%', justifyContent: "center" })}
}
  .head1{
    
  }
.head1 h2{
    background: var(--primary-color);
    color: white;
    padding: 10px 40px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    ${Tablet({ fontSize: '30px' })}
}
.head1 .title{
   display: flex;
   justify-content: center;
}
.head1 h5{
  color: #886B6B;
  font-weight: 800;
  font-size: 30px;
  margin: 20px;
}
.head1 p{
  margin: 0 20px;
  font-size: 20px;
  
}
.head2{
  height: 40vh;
  ${Tablet({ height: "50vh" })}
  ${Desktop({ height: "60vh" })}
}
.head2 .img1{
  height: 100%;
  width: 100%;
  object-fit: contain;
  
}

.key-service{
  display: flex;
  flex-direction: column-reverse;
  padding: 30px;
  background: url("/images/key-bg.png") no-repeat;
  background-size: contain;
  ${Tablet({ flexDirection: 'row' })}
}
.key-service .key1{
  height: 50vh;
  margin: 20px 0;
  ${Tablet({ flex: '40%', height: '90vh' })}
}
.key-service .key1 img{
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.key-service .key2{
  padding: 5px;
  ${Tablet({ flex: '60%', alignSelf: 'end', padding: '20px' })}
}
.key-service .key2 .key-item h6{
  color: var(--primary-color);
  font-weight: 700;
}
.key-service .key2 .key-item{
  margin-bottom: 30px;
}
.key-service .key2 .key-item p{
  font-size: 14px;
  max-width: 450px;
}
.key-service .key2 .key-item p .icon{
  height: 8px;
  width: 8px;
}
.key-service .key2 a{
  background: var(--primary-color);
  color: white;
  font-weight: 700;

}
.values p{
  ${Tablet({ width: "500px", textAlign: "center" })}
  ${Desktop({ width: "700px" })}
}
.values1{
  background: url('/images/values-bg.png') no-repeat;
  background-size:cover;
  color: white;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  padding: 30px;
}

 
`


function About() {
  return <>
    <Wrapper>
      <div className="heading">
        <div className="head1">
          <div className="title"><h2 className="btn">About Us</h2></div>
          <h5>Overview</h5>
          <p className="">
            BENTO DELIVAZ LIMITED, established in 2019, is a dynamic company blending e-commerce and logistics
            to deliver comprehensive solutions for businesses and consumers. We’ve quickly become a key player
            in the evolving world of online commerce and supply chain management.
          </p>
        </div>
        <div className="head2">
          <img src="/images/about1.png" alt="about" className="img1" />
        </div>
      </div>

      <div className="key-service">
        <div className="key1">
          <img src="/images/key.png" alt='key-service' className="img1" /></div>
        <div className="key2">
          <h4>KEY SERVICES:</h4>
          <div className="my-4">
            <div className="key-item">
              <h6>1.	E-Commerce Platform:</h6>
              <p><span><i className="fa-solid fa-circle icon"></i></span> We offer a robust and user-friendly e-commerce platform that enables businesses of all sizes to establish and grow their online presence.
              </p>
              <p><span><i className="fa-solid fa-circle icon"></i></span>	Customizable storefronts, secure payment gateways, and seamless order processing are just a few features of our comprehensive e-commerce solution.
              </p>
            </div>
            <div className="key-item">
              <h6>2. Logistics and Fulfillment:</h6>
              <p><span><i className="fa-solid fa-circle icon"></i></span> Our logistics services encompass the entire supply chain, from warehousing to order fulfillment and last-mile delivery.

              </p>
              <p><span><i className="fa-solid fa-circle icon"></i></span>	Utilizing advanced technologies and strategic partnerships, we ensure timely and cost-effective transportation of goods, enhancing the overall customer experience.
              </p>
            </div>
            <div className="key-item">
              <h6>3.Technology Integration:</h6>
              <p><span><i className="fa-solid fa-circle icon"></i></span> We strive to stay ahead of the curve with our state-of-the-art technology integration services. From AI-driven inventory management to real-time tracking, we leverage the latest innovations to optimize your operations.

              </p>

            </div>
            <div className="key-item">
              <h6>4.Customer Support:</h6>
              <p>
                <span><i className="fa-solid fa-circle icon"></i></span> 	A dedicated customer support team is available to address inquiries, provide assistance, and ensure a smooth experience for both businesses and consumers.
              </p>

            </div>
          </div>

          <Link to="https://onelink.to/y67ayu" target="_blank" className="btn">Become A partner</Link>
        </div>
      </div>

      <div className="values" >
        <div className="values1 d-flex flex-column justify-content-between align-items-center">
          <h3 className="mb-4">MISSION STATEMENT</h3>
          <p className="">Our mission is to revolutionize the way businesses conduct e-commerce and manage their logistics by delivering cutting-edge solutions that enhance efficiency, reduce costs, and exceed customer expectations. We strive to be a trusted partner in the success of our clients, empowering them to thrive in the digital marketplace.</p>
        </div>
      </div>


    </Wrapper>

  </>;
}

export default About;
