import OpenFile from "../components/OpenFile";
import Test4Screen from "../../tests/State/Test4";
import Test2Screen from "../../tests/State/Test2";
import Test5Screen from "../../tests/State/Test5";
import Nav from "../components/Nav";
import { Box, Container, Paper, List, ListItem, ListItemText, Typography } from "@mui/material";
const tasks = {
  task_1: {
    component: Test2Screen,
    file: "./tests/State/Test2.jsx",
    desc: "Change styles based on stateful variable value.",
    steps: [
      "Create a stateful 'color' variable.",
      "The initial background color of the h1 element should be LEMONCHIFFON.",
      "The background color of the h1 element should toggle between CORAL and LEMONCHIFFON when the button is triggered.",
      "The current color's name should be visible on screen within the h1 tag.",
    ],
  },
  task_2: {
    component: Test4Screen,
    file: "./tests/State/Test4.jsx",
    desc: "For this test, you will be making use of React Context. We have a variable named person, and we want this variable to be available throughout the application without having to redefine it in every instance.",
    steps: [
      "Use React Context.",
      "Make the setter variable in your context available to the SetterComponent.",
      "The 'newPerson' variable is already defined.",
      "When you click the 'set' button, it will set the value of 'newPerson' to the 'person' variable.",
      "This 'person' variable must now be available throughout the application without redefining it.",
      "When the 'person' variable changes values, all components subscribed to it should display the changes.",
    ],
  },
  task_4: {
    component: Test5Screen,
    file: "./tests/State/Test5.jsx",
    desc: "For this test, you will be making use of Conditional Rendering.",
    steps: [
      "Create a stateful variable named 'loading' along with its setter..",
      "Simulate a function that sends a request using the timeout function.",
      "Upon click of the button, the function will run.",
      "After the function is run, the application will enter a loading state.",
      "During the loading state, display the imported <Loader /> component.",
      "After completing the request, hide the <Loader /> component.",
    ],
  },
};

const links = [{ title: "Home", url: "/" }];

export default function StateLayout() {
  return (
    <>
      <Nav links={links} />
      <Container maxWidth="xl">
        {Object.keys(tasks).map((key) => (
          <Box
            key={tasks[key]}
            className="min-h-dvh flex flex-col-reverse md:flex-row items-center md:justify-around space-x-0 mb-24 gap-y-12 md:space-y-0 md:space-x-4"
          >
            {Object.keys(tasks[key]).map((nestedKey) => {
              console.log(tasks[key][nestedKey]);
              if (nestedKey === "component") {
                const Component = tasks[key][nestedKey];
                return (
                  <Paper
                    key={tasks[key[nestedKey]]}
                    className="w-full md:w-1/2 h-1/2 bg-red-200"
                  >
                    <Component key={tasks[key]} />
                  </Paper>
                );
              }
              if (Array.isArray(tasks[key][nestedKey])) {
                return (
                  <Paper variant="elevation" key={key} className="p-8">
                    <Typography
                      variant="h4"
                      className="first-letter:capitalize"
                    >
                      {key.split("_").join(": ")}
                    </Typography>
                    <OpenFile url={tasks[key].file} />
                    <Box style={{ marginBottom: 24 }}>
                      <b> Description: </b>
                      <p className="text-wrap md:w-2/3"> {tasks[key].desc} </p>
                    </Box>
                    <List>
                      {tasks[key][nestedKey].map((item, index) => (
                        <ListItem key={item}>
                          <ListItemText>
                            {index + 1}.) {item}
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                );
              }
            })}
          </Box>
        ))}
      </Container>
    </>
  );
}
