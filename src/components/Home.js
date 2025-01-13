import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.JPG";
import i4 from "../images/i4.jpg";
import i5 from "../images/i5.JPG";
import i6 from "../images/i6.JPG";

function Home() {
  const [showTitle, setShowTitle] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTitle(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowQuote(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setShowPage(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    window.location.href = "https://rzp.io/l/31bBIMJ";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [i5,i1,i2,i3,i6,i4];

  return (
    <div className="home">
      <div className="cover">
        <button
          className={`button-64 ${showQuote ? "button-transition-enter-active" : "button-transition-enter"}`}
          onClick={handleClick}
        >
          <span className="text">Support Us!</span>
        </button>

        <div
          className={`speaker-resgistration ${showQuote ? "quote-transition-enter-active" : "quote-transition-enter"}`}
        >
          <h2>Speaker<br />Registration</h2>
          <div className="indicator">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <h1 className={`title1 ${showTitle ? "title1-transition-enter-active" : "title1-transition-enter"}`}>
          Computer Society of India
        </h1>

        <h1 className={`title2 ${showTitle ? "title2-transition-enter-active" : "title2-transition-enter"}`}>
          PESMCOE Student Chapter 2025 !!
        </h1>

        <h1
          className={`quote ${showQuote ? "quote-transition-enter-active" : "quote-transition-enter"}`}
        >
          Decoding the Future, Pixel by Pixel!
        </h1>

        {showPage && (
          <div className="slideshow">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{ width: "100%", borderRadius: "10px", height:"400px" }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}
        <div 
          className={`speaker-page ${showPage ? "page-transition-enter-active" : "page-transition-enter"}`}
        >
            <iframe
              id="JotFormIFrame"
              title="Speaker Registration Form"
              src="https://form.jotform.com/250112678246455"
              style={{
                width: '100%',
                height: '100vh',
                border: 'none',
                margin: '0 auto', // Center the form
                display: 'block', // Helps with centering
                backgroundColor: '#ffffff' // Optional: adds a white background
              }}
              allowTransparency={true}
            />
        </div>
      </div>
    </div>
  );
}

export default Home;