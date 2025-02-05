import React from "react";
import "../index.css";

const Details = ({ ipAdd, location, timeZone, isp }) => {
  return (
    <div className="details">
      <div className="ip-add text-blue">
        IP ADDRESS <br /> {ipAdd ? ipAdd : "-"}
      </div>
      <div className="location text-blue">
        LOCATION <br />
        {location ? location : "-"}
      </div>
      <div className="time-zone text-blue">
        TIME ZONE <br /> {timeZone ? timeZone : "-"}
      </div>
      <div className="isp text-blue">
        ISP <br />
        {isp ? isp : "-"}
      </div>
    </div>
  );
};

export default Details;
