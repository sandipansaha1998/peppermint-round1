import React from "react";

import careerPoster from "../assets/career_poster.jpg";
import CounterCard from "../components/CountCard";
const About = () => {
  return (
    <div
      className="d-flex flex-column justify-content-around align-items-center"
      style={{ height: "100vh" }}
    >
      <h3 className="fw-bold">About Peppermint</h3>
      <p className="col-10 col-md-7 mx-auto fs-6 fs-md-5 text-justify">
        Peppermint is an award-winning robotics company, supported by SINE
        IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial and
        Enterprise robots and platforms for mobility-led services. The
        Engineering team has 50+ years of experience in building deep-tech and
        robotics products. Robots built on the Peppermint Platform are deployed
        across 13 cities in 4 countries!
      </p>
      <h3 className="mt-5 mb-0 fw-bold">
        Join us in shaping tomorrow, together
      </h3>
      <imageContainer className="col-10 d-flex flex-column flex-md-row justify-content-between align-items-center ">
        <img className="col-12 col-md-7 " src={careerPoster} alt="" srcset="" />
        <cardContainer className="d-flex  gap-5">
          <CounterCard category={"Countries Deployed"} count={4} />
          <CounterCard category={"Cities"} count={13} />
          <CounterCard category={"Years of Experience"} count={50} />
        </cardContainer>
      </imageContainer>
    </div>
  );
};

export default About;
