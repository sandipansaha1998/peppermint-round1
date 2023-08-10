import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { styled } from "styled-components";

import aiEngineerArt from "../../assets/carousel/ai_engineer.jpg";
import developerArt from "../../assets/carousel/developer.png";
import digitalMarketingArt from "../../assets/carousel/digital_marketing.png";

const CarouselImage = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: 60%;
  border-radius: 12.5px;
`;

const CarouselImageContainer = styled.div`
  height: 80vh;
  max-width: 50vw;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0.8;
  /* Mobile */
  @media only screen and (max-width: 767px) {
    /* CSS rules for mobile devices */
    height: 35vh;
  }

  /* Tablet */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    /* CSS rules for tablet devices */
  }

  /* Desktop */
  @media only screen and (min-width: 1024px) {
    /* CSS rules for desktop devices */
  }
`;
export const MainCarousel = () => {
  return (
    <div className="d-block d-md-none">
      <Carousel data-bs-theme="dark" pause="hover" controls={false}>
        <Carousel.Item>
          <CarouselImageContainer
            className="d-block mx-auto"
            alt="Be a Developer"
          >
            <CarouselImage
              src={developerArt}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </CarouselImageContainer>

          <Carousel.Caption className="fw-bold text-light">
            <h4 className="fw-bold">Software Development</h4>
            <p>Innovating code for seamless digital experiences</p>
            <button className="btn btn-light fw-bold">See Jobs</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImageContainer
            className="d-block mx-auto"
            alt="Be a Developer"
          >
            <CarouselImage
              src={aiEngineerArt}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </CarouselImageContainer>

          <Carousel.Caption className="fw-bold text-light">
            <h4 className="fw-bold">AI and IOT</h4>
            <p>Crafting intelligence through cutting-edge algorithms.</p>
            <button className="btn btn-light fw-bold">See Jobs</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImageContainer
            className="d-block mx-auto "
            alt="Be a Developer"
          >
            <CarouselImage
              src={digitalMarketingArt}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </CarouselImageContainer>

          <Carousel.Caption className="fw-bold text-light">
            <h4 className="fw-bold">Digital Marketing</h4>
            <p>Creating connections through strategic storytelling</p>
            <button className="btn btn-light fw-bold">See Jobs</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
