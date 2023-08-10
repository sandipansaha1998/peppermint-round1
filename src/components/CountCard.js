import React from "react";
import CountUp from "react-countup";

const CountCard = ({ count, category }) => {
  return (
    <div className="mt-2">
      <CountUp
        end={count}
        className="fs-1 fw-bold"
        suffix={category === "Years of Experience" ? "+" : ""}
      />
      <div className="fs-6 fs-md-2">{category} </div>
    </div>
  );
};

export default CountCard;
