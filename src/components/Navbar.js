import React, { useEffect, useState } from "react";
import styled from "styled-components";

import brand from "../assets/brand.png";
// Navbar
const Container = styled.nav`
  height: 90px;
  position: fixed;
  z-index: 55;
  @media only screen and (max-width: 767px) {
    position: fixed;
    color: black;
  }
`;

const Navbar = () => {
  let primaryBackgrounfColor = "#4cb6d5";
  let secondaryBackgroundColor = "#21292e";
  // Hook for background Color
  let [backgroundColor, setBackgroundColor] = useState(primaryBackgrounfColor);

  useEffect(() => {
    // Scroll Listner
    const handleScroll = () => {
      let scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      let viewportHeight = window.innerHeight;
      let carouselHeight = 0;
      // Setting different styles for mobiles
      if (window.screen.availWidth < 768) {
        carouselHeight = 0.35;
      } else {
        // Devices larger than mobile
        carouselHeight = 0.001;
      }

      if (scrollPosition >= carouselHeight * viewportHeight) {
        setBackgroundColor(secondaryBackgroundColor);
      } else {
        setBackgroundColor(primaryBackgrounfColor);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [primaryBackgrounfColor, secondaryBackgroundColor]);

  return (
    <Container
      style={{
        backgroundColor,
        color: backgroundColor === primaryBackgrounfColor ? "black" : "white",
        backgroundImage:
          backgroundColor === primaryBackgrounfColor
            ? primaryBackgrounfColor
            : "none",
        boxShadow:
          backgroundColor === primaryBackgrounfColor
            ? ""
            : "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      className=" sticky-top container-fluid d-flex justify-content-start justify-content-lg-start align-items-center ps-2 gap-4 "
    >
      <img
        className="col-4 col-md-2 col-lg-1 mx-auto m-md-1"
        src={brand}
        alt=""
      />
      <div className="navigation-controller d-md-flex gap-4 d-none">
        <div className="">HOME</div>
        <div className="">ABOUT US</div>
        <div className="">SOLUTIONS</div>
        <div className="">PRODUCTS</div>
        <div className="">RESOURCES</div>
      </div>
    </Container>
  );
};
export default Navbar;
