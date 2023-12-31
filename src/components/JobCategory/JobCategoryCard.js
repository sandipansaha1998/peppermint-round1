import Card from "react-bootstrap/Card";

import React from "react";

const JobCategoryCard = ({ image, jobRole, jobDesc }) => {
  return (
    <Card className="col-3 border-0">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{jobRole}</Card.Title>
        <Card.Text>{jobDesc}</Card.Text>
        <a href="#job-panel" className="btn btn-dark">
          Explore Jobs
        </a>
      </Card.Body>
    </Card>
  );
};

export default JobCategoryCard;
