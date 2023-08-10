import React from "react";
import JobCategoryCard from "./JobCategoryCard";
import aiEngineerArt from "../../assets/carousel/ai_engineer.jpg";
import developerArt from "../../assets/carousel/developer.png";
import digitalMarketingArt from "../../assets/carousel/digital_marketing.png";
const JobCategory = () => {
  return (
    <div className="d-none d-md-flex justify-content-around">
      <JobCategoryCard
        image={aiEngineerArt}
        jobRole={"AI and IOT"}
        jobDesc={"Crafting intelligence through cutting-edge algorithms "}
      />
      <JobCategoryCard
        image={developerArt}
        jobRole={"Software Development "}
        jobDesc={"Innovating code for seamless digital experiences"}
      />
      <JobCategoryCard
        image={digitalMarketingArt}
        jobRole={"Digital Marketing"}
        jobDesc={"Creating connections through strategic storytelling"}
      />
    </div>
  );
};

export default JobCategory;
