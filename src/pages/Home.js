import React from "react";
import styled from "styled-components";
import { Tablet, Desktop } from "../Responsive";
import { Link } from "react-router-dom";
import ContactInfo from './../components/ContactInfo';
import Mobile from './../components/Mobile';


const Wrapper = styled.div`
  min-height: 60vh;
  font-family: "Poppins", sans-serif;

  .home{
    min-height: 50vh;  
}
  .home .hero{
      padding: 10px 30px;
      display: grid;
      grid-template-column: 100%;
      justify-content: center;
      align-items: center;
      grid-gap: 40px;
      ${Tablet({ gridTemplateColumns: "50% 40%" })}
      ${Tablet({ gridTemplateColumns: "45% 30%" })}
    }
  .home .hero .intro{
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center; 
      align-items: center; 
    }
  .home .hero .intro .order-now{  
     ${Tablet({ alignSelf: "start" })} 
  }
    .home .hero .intro h1{
      font-weight: 700;
      font-size: 34px; 
      ${Tablet({ fontSize: "45px" })}
    }
    .home .hero .intro h1 span{
      color: var(--primary-color);
    }
    .home .hero .intro a{
      padding: 10px 20px;
      font-weight: 600;
      font-size: 20px;
      text-decoration: none;
      color: white;
      background:  var(--primary-color);
      border-radius: 30px;
      ${Tablet({ fontSize: "25px" })}
    }
    .home .hero .app-download{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;  
      
    }
    .home .hero .app-download .img-container{
     height: 30vh;
     margin-top: 20px;
     margin-bottom: 20px;
    ${Tablet({ height: "40vh" })}
    ${Tablet({ height: "50vh" })}
  }
  .home .hero .app-download .img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
  .home .hero .app-download .download-icons{
    margin-left: auto;
    margin-right: auto;
   }
   .home .hero .app-download .download-icons  .playstore {
    display: flex;
  }
  .home .hero .app-download .download-icons .store-home {
    width: 80px;
    height: 25px;
    ${Tablet({ width: "150px", height: "40px" })}
  }
  .home .hero .app-download .download-icons .store-home img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
    .services{
      
  }
  .services h3{
     color: var(--primary-color);
     font-weight: 700;
     text-align: center;
     margin:  30px 10px;
  }
  .services .products{
    display: flex;
    flex-direction: column;
    align-items: center
    justify-content: center;
    padding: 20px;
    ${Tablet({ flexDirection: "row", alignItems: "center", justifyContent: "space-between" })}
  }
.services .products .food{
    height: 30vh;
    background-image: url("/images/hero2.jpg");
    background-position: center;
    background-size: cover;
    position: relative;
    // z-index: -2;
    display: flex;
    flex-direction; column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
     ${Tablet({ height: "40vh", margin: "20px 40px" })}
}
 .services .products .parcel{
    height: 30vh;
    background-image: url("/images/hero.jpeg");
    background-position: center;
    background-size: cover;
    position: relative;
    // z-index: -2;
    display: flex;
    flex-direction; column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 20px;
    margin: 20px;
    border-radius: 20px;
     ${Tablet({ height: "40vh", margin: "20px 40px" })}
}
    

.services .products .food .product-bg, .services .products .parcel .product-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    border-radius: 20px;
}
.services .products .food .product, .services .products .parcel .product{
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
    z-index: 2;
}
.services .products .food .product h4, 
.services .products .parcel .product h4{
   font-size: 40px;
   font-weight: 700;
   margin-bottom: 30px; 
   text-align: center;
   
}
.services .products .food .product .product-store, 
.services .products .parcel .product .product-store{
   width: 60px;
   height: 20px;
   z-index: 1;
   ${Tablet({ width: "120px", height: "30px" })}
}
.services .products .food .product .product-store img, 
.services .products .parcel .product .product-store img{
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
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
    padding-right: 0;
    margin: 0;
    ${Tablet({ gridTemplateColumns: "30% 30% 30%", justifyContent: "space-between" })}
    ${Desktop({ gridTemplateColumns: "30% 30% 30%" })}
  }
  .rider .rider-container {
    height: 60vh;
    ${Tablet({ height: "70vh" })}
    ${Desktop({ height: "70vh" })}
  }
  .rider .rider-container img {
    height: 100%;
    width: 100%;
    object-fit: contain;
   
  }
  .rider .rider-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
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
    ${Tablet({ gridTemplateColumns: "45% 45%", justifyContent: 'center', alignContent: 'center' })}
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
    padding: 10px;
    margin-top: 20px;
    height: 50vh;
    ${Tablet({ height: "70vh" })}
  }
  .vendor .vendor2 img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
    .vendor .vendor1 {
    display: flex;
    flex-direction: column;
    justtify-content: center;
    align-items: center;
  }
   .vendor .vendor1 p{
      ${Desktop({ width: "400px" })}
  }
  .vendor .vendor1-container {
    height: 40vh;
    margin-top: 20px;
    ${Tablet({ height: "50vh" })}
  }
  .vendor .vendor1-container .img1 {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 50px;
  
  }
  // .vendor .vendor1-container .img2 {
  //   display: none;
  //   height: 100%;
  //   width: 100%;
  //   object-fit: cover;
  //   // ${Tablet({ display: "block" })}
  // }
`;

function Home() {

  return (
    <>
      <Wrapper>
        <section className="home" id="home">
          <div className="hero">
            <div className="intro">
              <h1>Safe and Instant delivery for your <span>Food</span> and <span>Parcels </span>
                in Abuja
              </h1>
              <div className="order-now mt-4 mt-md-5">
                <Link to="https://app.bentodelivaz.com" target="_blank">Order Now</Link>
              </div>
            </div>

            <div className="app-download">
              <div className="img-container">
                <img src="/images/hero.png" alt="hero" />
              </div>
              <div className="playstore download-icons">
                <div className="g-store me-3 store-home">
                  <Link to="https://play.google.com/store/apps/details?id=com.bentodelivaz.app" target="_blank">
                    <img src="/images/g-store3.png" alt="playstore" />
                  </Link>
                </div>
                <div className="a-store me-3 store-home">
                  <Link to="https://apps.apple.com/ng/app/bento-delivaz-app/id6553946055" target="_blank">
                    <img src="/images/a-store3.png" alt="applestore" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services container my-4">
          <div className="products">
            <div className="food">
              <div className='product-bg'></div>
              <div className="product">
                <h4>Food Delivery</h4>
                <div className="playstore">
                  <div className="g-store me-3 product-store">
                    <Link to="https://play.google.com/store/apps/details?id=com.bentodelivaz.app" target="_blank">
                      <img src="/images/g-store2.png" alt="playstore" />
                    </Link>
                  </div>
                  <div className="a-store me-3 product-store">
                    <Link to="https://apps.apple.com/ng/app/bento-delivaz-app/id6553946055" target="_blank">
                      <img src="/images/a-store2.png" alt="applestore" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="parcel">
              <div className='product-bg'></div>
              <div className="product">
                <h4>Parcel Delivery</h4>
                <div className="playstore">
                  <div className="g-store me-3 product-store">
                    <Link to="https://play.google.com/store/apps/details?id=com.bentodelivaz.app" target="_blank">
                      <img src="/images/g-store2.png" alt="playstore" />
                    </Link>
                  </div>
                  <div className="a-store me-3 product-store">
                    <Link to="https://apps.apple.com/ng/app/bento-delivaz-app/id6553946055" target="_blank">
                      <img src="/images/a-store2.png" alt="applestore" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <h3> Food delivery in Abuja</h3>
          <p>
            Whether you’re craving breakfast, lunch, dinner, or a late-night snack, Bento Delivaz makes it easy to order food online
            in Abuja and have it delivered fast to your doorstep. Discover new and nearby places to eat, explore a
            wide range of cuisines, and track your food delivery in real time. With Bento Delivaz, getting great
            meals and parcels delivered across Abuja has never been easier.
          </p>
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
              <div className="rider-content mx-2">
                <h3 className="">Become A Bento Rider</h3>
                <p>
                  Drive, deliver and earn. Make more money when you become a{" "}
                  <span>Bento Rider</span>
                </p>
                <div className="">
                  <Link target="_blank" to="/rider/download" className="btn">
                    Get Started
                  </Link>
                  &nbsp;
                  <Link to="https://app.bentodelivaz.com" target="_blank" className="btn">
                    Use Web App
                  </Link>
                </div>
              </div>
              <div className="rider-container">
                <img src="/images/rider2.png" alt="rider" />
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
              <div><Link
                to="/vendor/download"
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
                </Link></div>
              <div className="vendor1-container">
                <img src="/images/food-item.png" alt="vendor-food" className="img1" />

              </div>
            </div>


            <div className="vendor2">
              <img src="/images/vendor3.png" alt="vendor" />
            </div>
          </div>

        </section>
        <ContactInfo />
        <Mobile />
      </Wrapper>

    </>

  );
}

export default Home;
