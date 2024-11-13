import * as React from "react";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import hachertranker from "../assets/hackerranker.png";
import metacertificate from "../assets/metacertificate.png";
import reactcertificate from "../assets/reactcertifiacte.png";

export default function SimplePaper() {
  const [imagesdata, setImagedata] = React.useState(metacertificate);

  const onhandleEvent = (e, data) => {
    if (data === "meta") {
      setImagedata(metacertificate);
    } else if (data === "hacker") {
      setImagedata(hachertranker);
    } else if (data === "react") {
      setImagedata(reactcertificate);
    } else {
      setImagedata(metacertificate);
    }
  };
  return (
    <Paper elevation={16} sx={{ display: "flex" }}>
      <Card sx={{ width: "50%" }}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="heading"
            >
              Achivments
            </Typography>
            <div>
              <b className="heading">
                # Meta Front end Developer professional Certificate
              </b>
              <p>Certified by Meta</p>
            </div>
            <Button
              size="small"
              color="primary"
              onClick={(e) => onhandleEvent(e, "meta")}
            >
              click here for Certificate View
            </Button>
            <hr></hr>
            <div>
              <b className="heading">
                {" "}
                # Hacker Rank Front End Developer Certificate Rank{" "}
              </b>
              <p> Certified by Hacker</p>
            </div>
            <Button
              size="small"
              color="primary"
              onClick={(e) => onhandleEvent(e, "hacker")}
            >
              click here for Certificate View
            </Button>
            <hr></hr>
            <div>
              <b className="heading">
                # Certification Of Achievement Certified by React Certification
              </b>
              <p></p>
              <Button
                size="small"
                color="primary"
                onClick={(e) => onhandleEvent(e, "react")}
              >
                click here for Certificate View
              </Button>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"></Button>
        </CardActions>
      </Card>{" "}
      <Card sx={{ width: "50%" }}>
        <CardActionArea>
          <CardContent>
            <img
              src={imagesdata}
              alt="no iamge"
              style={{ width: "100%", height: "100%" }}
            ></img>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"></Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
