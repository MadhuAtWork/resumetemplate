import Paper from "@mui/material/Paper";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Summary() {
  return (
    <>
      <Paper elevation={16} sx={{ p: 2 }}>
        <h4 className="heading">Education</h4>
        <p>
          <b className="heading"> Samskruthi College of Engg and Tech</b>
        </p>
        <p>
          <b className="heading"> Bachelor of Technology (JNTUH)</b>
        </p>
        <p>percentage: 64%</p>
        <p>2014 - passout,</p>
        <p>
          {"  "}
          <LocationOnIcon className="me-2"></LocationOnIcon>
          Hyderabad • Telangana, India{" "}
        </p>
        <hr></hr>
        <p>
          <b className="heading"> R. D . Junior College</b>
        </p>
        <p>
          <b className="heading"> MPC ( Board of Intermediate Education )</b>
        </p>
        <p>percentage: 82%</p>
        <p>
          <LocationOnIcon className="me-2"></LocationOnIcon>
          Warangal • Telangana, India{" "}
        </p>
        <hr></hr>
        <p>
          <b className="heading"> Santhinikethan Vidyalayam</b>
        </p>
        <p>
          <b className="heading"> 10th (ssc)</b>
        </p>
        <p>percentage: 75%</p>
        <p>
          <LocationOnIcon className="me-2"></LocationOnIcon>
          Warangal • Telangana, India{" "}
        </p>
      </Paper>
    </>
  );
}
