import React from "react";
import Header from "./Header";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Carts() {
  return (
    <>
      <div className="row main">
        <div className="clo-12">
          <Paper
            sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
            elevation={3}
          >
            <Header></Header>
          </Paper>
        </div>
      </div>

      <div className="container m-5">
        <div className="row">
          <div className="col-12  m-5">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#2196f3",
        }}
        elevation={16}
      >
        <div className="row p-3 text-white text-center  g-2">
          <div className="col-4">
            <PhoneInTalkIcon className="me-2"></PhoneInTalkIcon>
            <a href="tel:+918501056461">+918501056461</a>
          </div>
          <div className="col-4">
            <EmailIcon className="me-2" />
            {/* <a href="mailto:madhuch155@gmail.com">madhuch155@gmail.com</a> */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=madhuch155@gmail.com"
              target="_blank"
            >
              madhuch155@gmail.com
            </a>
          </div>
          <div className="col-4">
            <LocationOnIcon className="me-2"></LocationOnIcon>
            <a
              href="https://www.google.com/maps?q=Your+Location+Hyderabad"
              target="_blank"
            >
              Hyderabad,Telangana
            </a>
            {"  "}
          </div>
        </div>
      </Paper>
    </>
  );
}
