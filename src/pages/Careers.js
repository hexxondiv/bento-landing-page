import React from 'react'
import styled from 'styled-components'
import { Desktop, Tablet } from '../Responsive';
import Mobile from './../components/Mobile';


const Wrapper = styled.div`
margin: 0;
padding: 0;
font-family: "Poppins", sans-serif;
min-height: 60vh;

.intro{
    background: url('/images/intro.jpeg') no-repeat;  
    background-size: cover; 
    background-position: center;
    height: 75vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: -2;
    ${Tablet({ height: '85vh', backgroundSize: 'cover' })}
}
.intro .bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
}
.intro .content{
    display: flex;
    flex-direction: column;
    justify-content: center
${Tablet({ width: '70%' })}
}
.intro .content h2{
    margin: 30px auto;
    width: 90%;
    color: white;
    font-weight: 700;
    background: linear-gradient(84.78deg, #FFFFFF 33.27%, #BA0018 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
    
${Tablet({ width: '70%', textAlign: "center" })}
}
.intro .content p{
    margin: 20px auto;
    width: 90%;
    font-weight: 500;
    line-height: 1.6;
    font-size: 18px;
${Tablet({ width: '70%', margin: "30px auto" })}
}

.benefits{
    background: rgba(113, 90, 252, 0.2);
    padding: 30px;
    margin: 40px 0;
}
.benefits h3{
    text-align: center;
    margin: 30px 20px;
    font-size: 30px;
}

.benefits .beneift-container{
   padding: 10px;
   display: grid;
   grid-template-columns: 100%;
   justify-content: center;
   gap: 30px;
   ${Tablet({ gridTemplateColumns: '45% 45%', padding: '30px' })}
   ${Desktop({ gridTemplateColumns: '30% 30% 30%' })}
}
.benefits .beneift-container h4{
    font-weight: 700;
    color: var(--primary-color);
    margin: 30px 5px;
}
.benefits .beneift-container .benefit{
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    background: rgba(186, 0, 24, 0.1);
    border-radius: 20px 0 20px 20px;
 }
 .benefits .beneift-container .benefit .img-container{
    height: 150px;
    width: 150px;
 }
 .benefits .beneift-container .benefit .img-container img{
    width: 100%;
 }

 .role{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
 }
.role h3, .role h4{
    font-weight: 700;
    color: var(--primary-color);
    
}
`

function Careers() {
    return (
        <>

            <Wrapper>
                <div className='intro'>
                    <div className='bg'></div>
                    <div className='content'>
                        <h2>Changing and Redifining the E-Commerce and Logistics Industry in Nigeria</h2>
                        <p> Bento Delivaz is deeply focused on inspiring people. Want to join us in breaking new
                            grounds? We are looking for great minds who are passionate about Technology and Logistics
                            and ready to join the dream team.
                        </p>
                    </div>
                </div>
                <div className='benefits'>
                    <h3>Some Benefits of Joining Bento Delivaz</h3>
                    <div className='beneift-container'>
                        <div className='benefit'>
                            <div className='img-container'>
                                <img src='/images/benefit1.png' alt='benefit' />
                            </div>
                            <h4>Provision of working tools & Stable Internet</h4>
                            <p>
                                All team members receive a work laptop on joining the Bento Delivaz Team,
                                calm office environment.
                            </p>
                        </div>
                        <div className='benefit'>
                            <div className='img-container'>
                                <img src='/images/benefit2.png' alt='benefit' />
                            </div>
                            <h4>Health Insurance</h4>
                            <p>
                                Health is wealth and you have to be healthy to perform your best. At Bento
                                Delivaz, we covers a wide range of quality medical facilities to ensures
                                that you receive timely medical attention from qualified professionals
                            </p>
                        </div>
                        <div className='benefit'>
                            <div className='img-container'>
                                <img src='/images/benefit3.png' alt='benefit' />
                            </div>
                            <h4>Flexible working conditions</h4>
                            <p>
                                We work 8:30am to 5pm, Monday to Friday, Four days onsite and one day remotely. What’s
                                important to us is that time spent at work is indeed productive
                            </p>
                        </div>
                        <div className='benefit'>
                            <div className='img-container'>
                                <img src='/images/benefit4.png' alt='benefit' />
                            </div>
                            <h4>Paid Annual Leave</h4>
                            <p>
                                At Bento Delivaz, we recognize the importance of work-life balance and our
                                all full-time employees, upon successful completion of
                                their probationary period, are entitled to paid annual leave.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='role'>
                    <h3>Ready for your next home?</h3>
                    <p>If you are a “Smart Creative” who is enthusiastic in providing solutions to big problems,
                        talk to us for an opportunity to be part of the passionate team on this mission.</p>
                    <h4>OPEN ROLES</h4>
                    <p>No full time roles available at this time.</p>
                </div>


                <Mobile />
            </Wrapper>

        </>
    )
}

export default Careers
