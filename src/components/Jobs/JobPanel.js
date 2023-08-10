import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SelectInput from "./SelectInput";

import ApplicationModal from "../Application Modal";
import JobCard from "./JobCard";

// data
import { department, positions, locations, jobs } from "../../data/data";
const JobPanel = () => {
  const backgroundColor = ["#daf8f0", "#fbe4d3", "#eff2f6"];
  // Contains the different filter parameters for searching jobs
  const searchParmsTemplate = {
    title: "",
    department: "",
    location: "",
    position: "",
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  // Hook for filter-search params
  const [searchParams, setSearchParams] = useState(searchParmsTemplate);
  // List of jobs
  const [currentJobs, setCurrentJobs] = useState(jobs);
  // Job Role where the user intends to apply
  const [currentJobRole, setCurrentJobRole] = useState("");
  let handleChange = (e) => {
    setSearchParams({ ...searchParams, title: e.target.value });
  };
  // Handles click on the job search button
  let handleSearch = () => {
    let { title, department, location, position } = searchParams;
    setCurrentJobs(() => {
      let updatedJobs = jobs.filter((job) => {
        // Filtering the jobs as per the filter parameters
        if (
          job.title.toLowerCase().includes(title.toLowerCase()) &&
          (department !== ""
            ? job.department === department
              ? true
              : false
            : true) &&
          (position !== ""
            ? job.position === position
              ? true
              : false
            : true) &&
          (location !== "" ? (job.location === location ? true : false) : true)
        ) {
          return true;
        }
        return false;
      });
      return updatedJobs;
    });
  };
  return (
    <div id="job-panel" className="d-flex flex-column mx-2">
      {/* Filter-search Panel */}
      <div
        className="container  d-flex text-light justify-content-around p-2 "
        style={{ background: "white", borderRadius: "12px" }}
      >
        {" "}
        <div className=" d-flex justify-md-content-around align-items-md-center col-12 gap-2 flex-wrap ">
          <div className="input-group  col-4 col-md ">
            {/* Search by job title */}
            <span className="input-group-text">
              <SearchIcon />
            </span>
            <input
              type="text"
              className="form-control py-3 "
              placeholder="Search By Job Title"
              aria-label="Username"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="col-md col-5">
            {/* Department */}
            <SelectInput
              category={"Department"}
              values={department}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </div>
          <div className="col-md col-5">
            {/* Location */}
            <SelectInput
              category={"Location"}
              values={locations}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </div>
          <div className="col-md col-6  border-0 border-mdborder-end border-secondary">
            {/* Position / Seniority */}
            <SelectInput
              category={"Position"}
              values={positions}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </div>
          {/* Search Button */}
          <div className="col">
            <button
              className="btn btn-secondary col-6 col-md-5 me-2 "
              onClick={handleSearch}
            >
              Search
            </button>
            {/* Resets the filter */}
            <button
              className="btn btn-secondary col-5 "
              onClick={() => {
                setSearchParams(searchParmsTemplate);
              }}
            >
              Reset{" "}
            </button>
          </div>
        </div>
      </div>
      {/* Job Display Panel */}
      <div className="d-flex gap-2 p-4 flex-wrap justify-content-start mx-auto col-10">
        {currentJobs.map((job, index) => {
          let { title, skills, location, position } = job;
          return (
            <JobCard
              key={`job-${index}`}
              title={title}
              skills={skills}
              position={position}
              location={location}
              openingDate={"10 Aug,2023"}
              toggleModal={toggleModal}
              setCurrentJobRole={setCurrentJobRole}
              backgroundColor={backgroundColor[index % 3]}
            />
          );
        })}
      </div>
      {/* Job Application Modal */}
      <ApplicationModal
        toggleModal={toggleModal}
        showModal={showModal}
        jobRole={currentJobRole}
      />
    </div>
  );
};

export default JobPanel;
