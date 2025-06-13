import React from 'react'
import styled from 'styled-components'
import About from './../components/About';
import Mobile from '../components/Mobile';
// import { Tablet } from "../Responsive";
// import { Link } from "react-router-dom";


const Wrapper = styled.div`
      margin: 0;
      padding: 0;
      font-family: "Poppins", sans-serif;
      
      `

function AboutUsPage() {


  return (
    <Wrapper>
      <section className="about pt-4" id="about">
        <About />
      </section>
      <Mobile />
    </Wrapper>
  )
}

export default AboutUsPage