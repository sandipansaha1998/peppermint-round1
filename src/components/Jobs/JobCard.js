import React from "react";
import Chip from "@mui/material/Chip";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
const JobCard = ({
  title,
  skills,
  location,
  position,
  department,
  openingDate,
  toggleModal,
  setCurrentJobRole,
  backgroundColor,
}) => {
  return (
    <div
      className="col-12 col-md-5 col-3 bg-light p-2"
      style={{ borderRadius: "25px" }}
    >
      <div
        className="p-3  d-flex flex-column gap-4 border  mb-3"
        style={{ backgroundColor: backgroundColor, borderRadius: "25px" }}
      >
        <header className="d-flex justify-content-between">
          <Chip label={openingDate} className="col-md-6 col-lg-4 bg-light" />
          <BookmarkBorderIcon />
        </header>
        <div className="d-flex flex-column align-items-start">
          <h3>{title}</h3>
          <h6>
            <LocationOnIcon />
            {location}
          </h6>
          <h6>
            {" "}
            <WorkIcon className="me-2 fs-4" />
            {position}
          </h6>
        </div>
        <div className="d-flex gap-4 flex-wrap">
          {skills.map((skill, key) => {
            return (
              <Chip
                key={`skill-${key}`}
                label={`${skill}`}
                variant="outlined"
                className="fs-6"
              />
            );
          })}
        </div>
      </div>
      <button
        className="btn btn-dark mx-auto col-4"
        onClick={() => {
          toggleModal();
          setCurrentJobRole(title);
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default JobCard;
