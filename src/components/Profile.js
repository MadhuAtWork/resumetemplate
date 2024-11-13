import Paper from "@mui/material/Paper";
import React from "react";
import madhupd from "./../assets/IMG_20231210_112110759_HDR.jpg";
import madhuPhoto from "./../assets/credentek-glps.jpeg";

export default function Summary() {
  return (
    <>
      <Paper elevation={16} sx={{ p: 2 }}>
        <div className="row">
          <div className="col-6 p-5">
            <h4 className="heading">Profile</h4>
            <hr></hr>
            <p>
              <b className="heading">Full Name :{"  "} Choppari Madhu</b>
            </p>
            <p>
              <b className="heading">Designation :{"  "} Frontend Developer </b>
            </p>
            <p>
              <b className="heading"> DOB :{"  "} 06/03/1991</b>
            </p>
            <p>
              <b className="heading">
                Current location:{"  "}{" "}
                <a
                  href="https://www.google.com/maps?q=Your+Location+Hyderabad"
                  target="_blank"
                  className="anchortag"
                >
                  Hyderabad,Telangana
                </a>
              </b>
            </p>
            <p>
              <b className="heading">
                Born place:{"  "}{" "}
                <a
                  href="https://www.google.com/maps?q=Your+Location+Mancherial"
                  target="_blank"
                  className="anchortag"
                >
                  Mancherial,Telangana
                </a>
              </b>
            </p>
            <p>
              <b className="heading">
                Languages: Telugu,{"  "}English,{"  "}Hindi
              </b>
            </p>
            <p>
              <b className="heading">
                Email ID: {"  "}{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=madhuch155@gmail.com"
                  target="_blank"
                  className="anchortag"
                >
                  madhuch155@gmail.com
                </a>
              </b>
            </p>
            <p>
              <b className="heading">
                Mobile No: {"  "}{" "}
                <a href="tel:+918501056461" className="anchortag">
                  +918501056461
                </a>
              </b>
            </p>
          </div>
          <div className="col-6">
            <img
              src={madhupd}
              alt="no data"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </div>
        </div>
      </Paper>
    </>
  );
}
