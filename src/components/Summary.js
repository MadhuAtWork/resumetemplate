import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Summary() {
  const textdata = `Almost 4+ years of working experience in developing projects
  which include ReactJS Knowledge in developing single-page
  applications (SPAs). JS Good knowledge of JavaScript concepts.
  CSS Good experience with CSS3 and SASS. Responsive Hands-on
  experience in developing responsive websites. Experience in
  creating APIs, Routes, and events. Can create and handle JSON,
  regarding fetching data. Knowledge of using tools like Postman.
  Ability to grasp latest technologies and to properly apply new
  tools to build applications. Ability to communicate requirements
  effectively to team members and manage applications`;

  const Objective = `
Objective 
4+ years of work experience in developing web applications.
 I am looking forward for an opportunity, where I can utilize my skills by contributing effectively to the success of the organization and further enhancement of my personal.
 `;
  const data = `

`;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            p: 2,
          },
        }}
      >
        {/* <Paper elevation={16}>
          <h4 className="heading">Objective</h4>
          <p>{Objective}</p>
        </Paper> */}
        <Paper elevation={16}>
          <h4 className="heading">Objective</h4>
          <p>{Objective}</p>
          <p>
            {" "}
            <h4 className="heading">Experience Summary</h4>
            <p>
              • Almost 4 years of working experience in developing projects
              which include ReactJS Knowledge in developing single-page
              applications (SPAs)
            </p>
          </p>
          <p>• Experience in creating APIs, Routes, and events.</p>
          <p>
            • Can handle state management and a good understanding of React JS
            workflow.
          </p>
          <p>• JS Good knowledge of JavaScript concepts.</p>
          <p>• Can create and handle JSON, regarding fetching data.</p>
          <p>• CSS Good experience with CSS3 and SASS.</p>
          <p>
            • Responsive Hands-on experience in developing responsive websites.
          </p>
          <p>
            • Dev-tools Practical knowledge of Google Chrome Dev-tools,
            debugging the script Execution and handling Network calls.
          </p>
          <p>• Knowledge of using tools like Postman.</p>
          <p>
            • IDE tools good knowledge in using IDE tools such as Notepad++,
            Visual Studio.
          </p>
          <p>• Deploying the code in dev, QA, and production servers</p>
          <p>
            • Ability to grasp latest technologies and to properly apply new
            tools to build applications.
          </p>
          <p>
            • Provided 24x7 support to production and development environments.
          </p>
          <p>
            • Ability to communicate requirements effectively to team members
            and manage applications.
          </p>
        </Paper>
      </Box>
    </>
  );
}
