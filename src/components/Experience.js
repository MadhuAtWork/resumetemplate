import Paper from "@mui/material/Paper";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Summary() {
  const textdata = ` Developed a web-based responsive application aimed at providing loans to women for agriculture and 
  small businesses. Ensured full responsiveness and compatibility across all devices, enhancing user experience.
  Implemented functionalities for file operations, including. Enabled users to download loan-related documents in PDF format and
   Zip format. Allowed users to upload images for documentation and application processing. Implemented functionality for users to download necessary images.
   Integrated a comprehensive search feature to facilitate quick access to relevant information across the application.  
  `;
  const textdatasasf = ` Developed a comprehensive banking loan system to handle both rupee term loan   
     foreign currency loans. Utilized React.js for building interactive user interfaces and managing business logic.
      Utilized React.js for building interactive user interfaces and managing business logic. Implemented a solution to render
       master pages dynamically using JSON files, allowing for easier updates and scalability. Integrated Two-Factor Authentication to enhance security for user logins.
   Developed functionalities for Change Password and Forgot Password to ensure user account management is user- friendly and secure.`;
  const fantaildata =
    "Developed a web-based, responsive application for seamless file transfers between agents (e.g., CSV files). Integrated Three.js to create and interactive 3D animated dashboard, enhancing the user experience with visually dynamic content. Utilized React.js for the frontend architecture, ensuring a modular and maintainable codebase. Managed global state effectively with Redux for a smooth and scalable user experience. Leveraged ECharts.js to display data visualizations and insights for users, providing clear feedback on file transfer statuses";
  return (
    <>
      <Paper elevation={16} sx={{ p: 2 }}>
        <h3 className="heading">Experience</h3>
        <p>
          <b className="heading">CredenTek Software & Consultancy Pvt. Ltd.</b>
        </p>
        <p>
          <b>Software Engineer</b>
        </p>
        <p>
          2022 - Present,{"   "}
          <LocationOnIcon className="me-2 anchortag"></LocationOnIcon>
          <a
            href="https://www.google.com/maps?q=Your+Location+Pune"
            target="_blank"
            className="anchortag"
          >
            Pune,Maharastra{" "}
          </a>
        </p>
        <p>
          <b className="heading">
            # Group Loan Processing System (GLPS), (Jana Bank)
          </b>
        </p>
        <p>
          <b>Technologies:</b> React JS, Redux, MUI{" "}
        </p>
        <p>
          <b>Description:</b>
          {textdata}
        </p>
        <p>
          <b className="heading">
            #Stressed Assets Stabilisation Fund (SASF), (IDBI Bank)
          </b>
        </p>
        <p>
          <b> Technologies:</b> React JS, Redux, MUI{" "}
        </p>
        <p>
          {" "}
          <b>Description:</b>
          {textdatasasf}
        </p>
        <p>
          <b className="heading"> FanTail-P, (Yes Bank, IDFC, IDBI, L&T) </b>
        </p>
        <p>
          <b> Technologies:</b> React JS, Redux, MUI{" "}
        </p>
        <p>
          {" "}
          <b>Description:</b>
          {fantaildata}
        </p>
        <hr></hr>
        <p>
          <b className="heading"> Ortler Solutions Pvt Ltd. </b>
          <p>
            <b>Software Engineer</b>
          </p>
          <p>
            2020 - 2022 , {"  "}
            <LocationOnIcon className="me-2 anchortag"></LocationOnIcon>
            <a
              href="https://www.google.com/maps?q=Your+Location+Hyderabad"
              target="_blank"
              className="anchortag"
            >
              Hyderabad,Telangana
            </a>
          </p>
          <p>
            <b className="heading"># Tailor man </b>
          </p>
          <p>
            {" "}
            <b>Technologies: </b>React JS, Redux, Tailwind Css,{" "}
          </p>
          <p>
            {" "}
            <b> Description: </b> It’s both web and mobile application. This
            application is built with the purpose of providing easy and better
            shopping services to customers. This is web-based hybrid responsive
            application it supports all devices to engage customers for online
            shopping.
          </p>
        </p>
      </Paper>
    </>
  );
}
