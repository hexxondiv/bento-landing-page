import React from 'react'
import styled from 'styled-components'
import { Tablet } from '../Responsive'
import { Link } from "react-router-dom"

const Wrapper = styled.div`
  min-height: 60vh;
  font-family: "Poppins", sans-serif;

  .download{
      height: 60vh;
      background-image: url("/images/hero.jpeg");
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: -2;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
       ${Tablet({ height: "80vh" })}
  }
  .download .hero-bg{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: -1;
  }
  .download .hero{
      text-align: center;
  }
  .download h1{
      font-weight: 700;
      text-align: center;
  }
.content{
  
}
.download-icons{
display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${Tablet({ flexDirection: "row" })}
  
}
a{
  margin: 30px 20px;
  width: 200px;
  height: 50px;
}
  img{
   width: 100%;
   height: 100%;
   object-fit: contain;
  }

`

function DownloadLink() {
    return (
        <Wrapper>
            <div className='download'>
                <div className='hero-bg'></div>
                <div className='content'>
                    <h1>Download Now On</h1>
                    <div className='download-icons'>
                        <Link to="https://play.google.com/store/apps/details?id=com.bentodelivaz.app" target="_blank">
                            <img src="/images/g-store2.png" alt="playstore" />
                        </Link>
                        <Link to="https://apps.apple.com/ng/app/bento-delivaz-app/id6553946055" target="_blank" className=''>
                            <img src="/images/a-store2.png" alt="applestore" />
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default DownloadLink