import React, { useState } from 'react'
import styled from "styled-components";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Desktop, Tablet } from "../Responsive";
import Mobile from "../components/Mobile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
margin: 0;
padding: 0;
font-family: "Poppins", sans-serif;
min-height: 60vh;

.question{
    margin: 30px 0;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    ${Tablet({ width: "70vw" })}
    ${Desktop({ width: "60vw" })}
  }
  .question h3{
    color:  var(--primary-color);
    font-weight: 700;
  }
  
  .question .contents{
    display: grid;
    grid-template-columns: 100%;
   
  
  }
  .question .contents .qs-image{
    
  }
  .question .contents .qs-image a{
    background-color:  var(--primary-color);
    font-weight: 700;
    color: white;
    padding: 6px 30px;
    width: 200px;
  }
  .question .contents .qs-image .img-container{
    height: 40vh;
    ${Tablet({ height: '60vh' })}
  }
  .question .contents .qs-image .img-container img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .question .contents .title{
    display:  flex;
    justify-content: space-between;
    margin: 0;
  }
  .question .contents .title h6{
    font-weight: 500;
  }
  .question .contents .qs1{
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }
  .question .contents .qs1 p{
    margin-bottom: 6px;
  }
  .question .contents .qs1 p span{
    font-weight: 700;
  }
  .question .contents .qs1 .answer{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .question .contents .questions a{
    margin: 20px auto;
    font-weight: 600;
    color: white;
    background: var(--primary-color);
    padding: 6px 20px;

`

function FAQs() {
    const [buttonState, setButtonState] = useState({});

    const toggleContent = (buttonId) => {
        setButtonState((prevState) => ({
            ...prevState,
            [buttonId]: !prevState[buttonId] || false,
        }));
    };


    return (
        <>

            <Wrapper>

                <div className="question container">
                    <div className="head ms-4">
                        <h3>Frenquently asked Questions</h3>
                        <p>Questions you can ask about our services </p>
                    </div>
                    <div className="contents mt-3">

                        <div className="questions m-3">
                            <div className="qs1">
                                <div className="title">
                                    <h6>How can I get started ?</h6>
                                    <div onClick={() => toggleContent('button1')}>
                                        {buttonState['button1'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button1'] && (
                                    <div>
                                        <p>Want to order a meal or have us deliver
                                            a package for you? then create an
                                            account or download the app to get started </p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6>How can I create an account on Bento Delivaz App ?</h6>
                                    <div onClick={() => toggleContent('button2')}>
                                        {buttonState['button2'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2'] && (
                                    <div className="answer">
                                        <p>
                                            You can create an account in 4 easy steps;
                                        </p>
                                        <p><span>Step 1</span>: Click on 'Login/Create an account' at the top of the website or on the mobile app.</p>
                                        <p><span>Step 2</span>: Fill out your information in the Create an account section</p>
                                        <p><span>Step 3</span>: Click the Create an account button</p>
                                        <p><span>Step 4</span>: Select your delivery address on the map and proceed with your order placement</p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6>How do I address issues with my order or delivery ? </h6>
                                    <div onClick={() => toggleContent('button3')}>
                                        {buttonState['button3'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button3'] && (
                                    <div className="answer">
                                        <p>
                                            If you encounter any problems with your order, you can reach out to our customer support through the app
                                        </p>
                                        <p>We have a dedicated support team available to assist you with order modifications, refunds, or any other concerns.</p>
                                        <p>You can also provide feedback through the app to help us continually improve our services.</p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6>How can I track my food or Parcel delivery in real-time ? </h6>
                                    <div onClick={() => toggleContent('button4')}>
                                        {buttonState['button4'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button4'] && (
                                    <div className="answer">
                                        <p>
                                            Once your order is confirmed, you can track its status through the mobile app.
                                        </p>
                                        <p>Real-time updates, including the estimated time of arrival, are provided.</p>
                                        <p>For logistics, parcel tracking includes key milestones from pickup to delivery</p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6>What payment methods are accepted on the Bento Delivaz App ?</h6>
                                    <div onClick={() => toggleContent('button5')}>
                                        {buttonState['button5'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button5'] && (
                                    <div className="answer">
                                        <p >
                                            The app supports various secure payment options, including credit/debit cards, bank transfers, USSD transfers  and in some cases, cash on delivery
                                        </p>
                                        <p>Your payment details are encrypted to ensure a secure transaction experience.</p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6>How does Bento Delivaz mobile application work ?</h6>
                                    <div onClick={() => toggleContent('button6')}>
                                        {buttonState['button6'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button6'] && (
                                    <div className="answer">
                                        <p>
                                            Bento Delivaz mobile application connects users with local restaurants and delivery agents.
                                        </p>
                                        <p>Users can browse menus, place orders, and track their delivery in real-time.</p>
                                        <p>For logistics, the app enables users to schedule parcel pickups and deliveries efficiently.</p>
                                    </div>
                                )}

                            </div>

                            <h5 className='my-4'>Frequently Asked Questions (FAQ) for our
                                Parcel Delivery Section</h5>

                            <div className="qs1">
                                <div className="title">
                                    <h6> What types of parcels can I send through Bento Delivaz?</h6>
                                    <div onClick={() => toggleContent('button2-1')}>
                                        {buttonState['button2-1'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-1'] && (
                                    <div className="answer">
                                        <p>
                                            Bento Delivaz offers parcel delivery services for a wide range of items, including
                                            documents, packages, gifts, and other goods that are within our size and weight restrictions.
                                        </p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6> A How do I schedule a parcel delivery pickup?</h6>
                                    <div onClick={() => toggleContent('button2-2')}>
                                        {buttonState['button2-2'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-2'] && (
                                    <div className="answer">
                                        <p>
                                            Scheduling a parcel delivery pickup is easy with Bento Delivaz. Simply open the app, select the
                                            "Parcel Delivery" option, provide the necessary details such as pickup and delivery addresses,
                                            parcel dimensions, and any special instructions, and choose a pickup time slot that works for you.
                                        </p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6>  What are your parcel delivery rates?</h6>
                                    <div onClick={() => toggleContent('button2-3')}>
                                        {buttonState['button2-3'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-3'] && (
                                    <div className="answer">
                                        <p>
                                            Parcel delivery rates may vary depending on factors such as distance, parcel size, and vehicle
                                            type. You can view the estimated delivery cost during the booking process in the app.
                                        </p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6>  How long does it take for my parcel to be delivered?</h6>
                                    <div onClick={() => toggleContent('button2-4')}>
                                        {buttonState['button2-4'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-4'] && (
                                    <div className="answer">
                                        <p>
                                            Parcel delivery times may vary depending on factors such as distance, traffic conditions, and
                                            delivery volume. However, we strive to ensure that parcels are delivered promptly and within the
                                            estimated timeframe provided during booking.
                                        </p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6> Can I track my parcel delivery status?</h6>
                                    <div onClick={() => toggleContent('button2-5')}>
                                        {buttonState['button2-5'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-5'] && (
                                    <div className="answer">
                                        <p>
                                            Yes, you can track the status of your parcel delivery in real-time through the Bento Delivaz app.
                                            Once your parcel is picked up, you'll receive updates on its delivery progress until it reaches its
                                            destination.
                                        </p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6> Is there a weight or size limit for parcels?</h6>
                                    <div onClick={() => toggleContent('button2-6')}>
                                        {buttonState['button2-6'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-6'] && (
                                    <div className="answer">
                                        <p>
                                            Bento Delivaz imposes certain weight and size restrictions for parcels to ensure safe and efficient
                                            delivery. Please check the app for specific details regarding weight and size limits for parcel
                                            delivery.
                                        </p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6>  How do I pay for my parcel delivery?</h6>
                                    <div onClick={() => toggleContent('button2-7')}>
                                        {buttonState['button2-7'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-7'] && (
                                    <div className="answer">
                                        <p>
                                            Payment for parcel delivery can be made through various methods, including cash on pickup,
                                            online payments via debit/credit cards, USSD codes, and bank transfers. Choose the payment
                                            method that is most convenient for you during the booking process.
                                        </p>
                                    </div>
                                )}

                            </div>
                            <div className="qs1">
                                <div className="title">
                                    <h6> What safety measures do you have in place for parcel delivery?</h6>
                                    <div onClick={() => toggleContent('button2-8')}>
                                        {buttonState['button2-8'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-8'] && (
                                    <div className="answer">
                                        <p>
                                            Bento Delivaz prioritizes the safety and security of parcels during transit. Our delivery partners
                                            follow strict protocols to ensure the safe handling and delivery of parcels, and we provide
                                            insurance coverage (not exceeding NGN 20,000 twenty thousand naira in damages) for added
                                            protection(please check terms and condition page for additional information).
                                        </p>
                                    </div>
                                )}

                            </div>

                            <div className="qs1">
                                <div className="title">
                                    <h6> Can I schedule a parcel delivery for a specific time window?</h6>
                                    <div onClick={() => toggleContent('button2-9')}>
                                        {buttonState['button2-9'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-9'] && (
                                    <div className="answer">
                                        <p>
                                            Yes, you can specify a preferred delivery time window during the booking process in the app. Our
                                            delivery partners will strive to accommodate your re"uested delivery time whenever
                                            possible.
                                        </p>
                                    </div>
                                )}

                            </div>

                            <div className="qs1">
                                <div className="title">
                                    <h6> How can I contact customer support for parcel delivery inquiries?</h6>
                                    <div onClick={() => toggleContent('button2-10')}>
                                        {buttonState['button2-10'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-10'] && (
                                    <div className="answer">
                                        <p>
                                            If you have any questions, concerns, or issues regarding your parcel delivery, you can contact our
                                            customer support team through the app. We're here to assist you and ensure that your parcel
                                            delivery experience with Bento Delivaz is smooth and hassle-free.
                                        </p>
                                    </div>
                                )}

                            </div>

                            <div className="qs1">
                                <div className="title">
                                    <h6>  How is the BentoDelivaz App associated with the Bento Vendor App?</h6>
                                    <div onClick={() => toggleContent('button2-11')}>
                                        {buttonState['button2-11'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-11'] && (
                                    <div className="answer">
                                        <p>
                                            The Bento Vendor App serves as a complementary platform to the BentoDelivaz App, enabling
                                            food vendors to register and collaborate with BentoDelivaz Ltd. This partnership empowers
                                            vendors to effortlessly connect with their customers through the BentoDelivaz App, facilitating
                                            convenient food ordering from any location.
                                        </p>
                                    </div>
                                )}

                            </div>

                            <div className="qs1">
                                <div className="title">
                                    <h6>  Is BentoDelivaz LtdA a registered entity in Nigeria?</h6>
                                    <div onClick={() => toggleContent('button2-12')}>
                                        {buttonState['button2-12'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-12'] && (
                                    <div className="answer">
                                        <p>
                                            BentoDelivaz operates as a duly registered e-commerce and logistics company in Nigeria. Our
                                            operations are conducted in compliance with Nigerian governmental regulations, and we adhere to
                                            all stipulated legal requirements
                                        </p>
                                    </div>
                                )}

                            </div>

                            <div className="qs1">
                                <div className="title">
                                    <h6> How secure are my payment details on the App or website?</h6>
                                    <div onClick={() => toggleContent('button2-13')}>
                                        {buttonState['button2-13'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-13'] && (
                                    <div className="answer">
                                        <p>
                                            At BentoDelivaz, we prioritize the security of your payment information. Our App and website
                                            employ state-of-the-art encryption technology to safeguard your personal and financial data
                                            during transactions. Additionally, we maintain stringent protocols to address any payment-related
                                            concerns promptly
                                        </p>
                                    </div>
                                )}

                            </div>

                            <div className="qs1">
                                <div className="title">
                                    <h6>  Are there any ongoing promotions available?</h6>
                                    <div onClick={() => toggleContent('button2-14')}>
                                        {buttonState['button2-14'] ? <span><FontAwesomeIcon icon={faAngleDown} /></span> :
                                            <span><FontAwesomeIcon icon={faAngleRight} /></span>}
                                    </div>
                                </div>
                                {buttonState['button2-14'] && (
                                    <div className="answer">
                                        <p>
                                            Yes, as part of our promotional offerings, we have discounts on
                                            all orders placed through the BentoDelivaz App.
                                        </p>
                                    </div>
                                )}

                            </div>


                        </div>

                        <div className="qs-image">
                            <div className="img-container">
                                <img src="/images/qs.png" alt="questions" />
                            </div>
                            <h3>Still Have Questions?</h3>
                            <p>Please contact our customer service </p>
                            <Link className="btn" to="tel:09070059320" target="_blank">Talk to us!</Link>
                        </div>
                    </div>
                </div>
                <Mobile />
            </Wrapper>
            <Footer />
        </>
    )
}

export default FAQs
