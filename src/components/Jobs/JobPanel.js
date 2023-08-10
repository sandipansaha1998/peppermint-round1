import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SelectInput from "./SelectInput";

import JobCard from "./JobCard";
// data
import { department, positions, locations, jobs } from "../../data/data";
const JobPanel = () => {
  const searchParmsTemplate = {
    title: "",
    department: "",
    location: "",
    position: "",
  };
  const [searchParams, setSearchParams] = useState(searchParmsTemplate);
  const [currentJobs, setCurrentJobs] = useState(jobs);
  let handleChange = (e) => {
    setSearchParams({ ...searchParams, title: e.target.value });
  };

  let handleSearch = () => {
    let { title, department, location, position } = searchParams;
    console.log(searchParams);
    setCurrentJobs(() => {
      let updatedJobs = jobs.filter((job) => {
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
        console.log(job.title.includes(title));
        return false;
      });
      console.log(updatedJobs);
      return updatedJobs;
    });
  };
  return (
    <div className="d-flex flex-column">
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
            <SelectInput
              category={"Department"}
              values={department}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </div>
          <div className="col-md col-5">
            <SelectInput
              category={"Location"}
              values={locations}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </div>
          <div className="col-md col-6  border-0 border-mdborder-end border-secondary">
            <SelectInput
              category={"Position"}
              values={positions}
              setSearchParams={setSearchParams}
              searchParams={searchParams}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-secondary col-6 col-md-5 me-2 "
              onClick={handleSearch}
            >
              Search
            </button>
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
      <div className="d-flex gap-2 p-4 flex-wrap justify-content-between mx-3">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default JobPanel;
