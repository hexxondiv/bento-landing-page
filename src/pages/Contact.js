import React from "react";
import styled from "styled-components";
import { Tablet } from "../Responsive";
import Mobile from '../components/Mobile'
import ContactInfo from '../components/ContactInfo'


const Wrapper = styled.div`
  min-height: 60vh;
  font-family: "Poppins", sans-serif;

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
 
`;

function Contact() {

  return (
    <>
      <Wrapper>
        <section className="partner" id="partner">
          <div className="rider">
            <div className="rider-heading px-3">
              <h3>How can we Help you?</h3>
              <p className="desc">
                Hey, let us know your problem here.
              </p>
            </div>

          </div>

        </section>
        <ContactInfo />
        <Mobile />
      </Wrapper>

    </>

  );
}

export default Contact;
