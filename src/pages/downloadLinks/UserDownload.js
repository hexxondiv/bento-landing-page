import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"


const Wrapper = styled.div`
  min-height: 60vh;
  font-family: "Poppins", sans-serif;
  
  h1{
      font-weight: 700;
      text-align: center;
  }
.container{
        font-family: sans-serif;
        text-align: center;
        padding: 50px;
    }
.d-btn{
    display: inline-block;
    margin:  10px;
    padding: 12px 24px;
    font-size: 18px;
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    }
  .fallback{
        display: none;
    }

`

function UserDownload() {
    const [showFallback, setShowFallback] = React.useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Redirect iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = "https://apps.apple.com/app/id6553946055";
            return;
        }

        // Redirect Android
        if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.bentodelivaz.app";
            return;
        }

        // Show fallback if no redirect
        setShowFallback(true);
    }, []);

    return (
        <Wrapper>
            <div className='container'>
                <h1>Redirecting to BentoDelivaz User App...</h1>
                <div id="fallback" className='fallback' style={{ display: showFallback ? 'block' : 'none' }}>
                    <p>We couldn't detect your device. Please choose your platform:</p>
                    <Link className='d-btn' target='_blanck' to="https://play.google.com/store/apps/details?id=com.bentodelivaz.app">
                        Download for Android
                    </Link>
                    <Link className='d-btn' target='_blanck' to="https://apps.apple.com/app/id6553946055">
                        Download for iOS
                    </Link>
                </div>
            </div>
        </Wrapper>
    );


}

export default UserDownload