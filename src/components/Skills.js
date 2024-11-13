import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import JavascriptIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Language";
import CssIcon from "@mui/icons-material/Palette";
import GitHubIcon from "@mui/icons-material/GitHub";
import DatabaseIcon from "@mui/icons-material/Storage";

export default function SimplePaper() {
  const data = [
    "React JS",
    "Javascript",
    "Next JS",
    "Express JS",
    "REDUX",
    "Node JS",
    "HTML",
    "CSS",
    "JEST",
    "SVN",
    "Git Hub",
    "Bootstrap",
    "MUI",
    "Tailwind CSS",
    "Ant Design",
    "Mongo DB",
    "Oracel DB",
    "VS Code",
    "Eclipse",
    "PostMan",
    "Chart JS",
    "React Flow",
  ];
  // Map icons to each technology
  const iconMap = {
    "React JS": <CheckCircleIcon style={{ color: "#61DAFB" }} />,
    Javascript: <JavascriptIcon style={{ color: "#F7DF1E" }} />,
    Typescript: <JavascriptIcon style={{ color: "#F7DF1E" }} />,
    "Next JS": <CheckCircleIcon style={{ color: "#000" }} />, // Placeholder
    "Express JS": <CheckCircleIcon style={{ color: "#000" }} />, // Placeholder
    REDUX: <CheckCircleIcon style={{ color: "#764ABC" }} />,
    "Node JS": <CheckCircleIcon style={{ color: "#83CD29" }} />,
    HTML: <HtmlIcon style={{ color: "#E34F26" }} />,
    CSS: <CssIcon style={{ color: "#1572B6" }} />,
    JEST: <CheckCircleIcon style={{ color: "#99424F" }} />, // Placeholder
    SVN: <CheckCircleIcon style={{ color: "#000" }} />, // Placeholder
    "Git Hub": <GitHubIcon style={{ color: "#181717" }} />,
    Bootstrap: <CheckCircleIcon style={{ color: "#7952B3" }} />,
    MUI: <CheckCircleIcon style={{ color: "#007FFF" }} />,
    "Tailwind CSS": <CheckCircleIcon style={{ color: "#38B2AC" }} />,
    "Ant Design": <CheckCircleIcon style={{ color: "#1890FF" }} />,
    "Mongo DB": <DatabaseIcon style={{ color: "#47A248" }} />,
    "Oracle DB": <DatabaseIcon style={{ color: "#F80000" }} />,
    "VS Code": <CheckCircleIcon style={{ color: "#007ACC" }} />,
    Eclipse: <CheckCircleIcon style={{ color: "#2C2255" }} />,
    PostMan: <CheckCircleIcon style={{ color: "#FF6C37" }} />,
    "Chart JS": <CheckCircleIcon style={{ color: "#FF6384" }} />,
    "React Flow": <CheckCircleIcon style={{ color: "#61DAFB" }} />,
  };
  const langauage = ["English", "Hindi", "Telugu"];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper elevation={16}>
        <Card sx={{ width: "100%" }}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Technologies and Skills
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="row g-3 ps-5">
                  {data.map((value, index) => {
                    return (
                      <div
                        className="col-4 text-start d-flex align-items-center"
                        key={index}
                      >
                        {iconMap[value] || <CheckCircleIcon />}{" "}
                        {/* Default icon if none is mapped */}
                        <b
                          style={{
                            marginLeft: "8px",
                            fontSize: "16px",
                            color: "#333",
                          }}
                        >
                          {value}
                        </b>
                      </div>
                    );
                  })}
                </div>
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="heading"
              >
                Languages
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {langauage.map((value, index) => {
                  return (
                    <div
                      className="col-12 text-start d-flex align-items-center"
                      key={index}
                    >
                      {iconMap[value] || <CheckCircleIcon />}{" "}
                      {/* Default icon if not mapped */}
                      <b
                        style={{
                          marginLeft: "8px",
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        {value}
                      </b>
                    </div>
                  );
                })}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </Box>
  );
}
