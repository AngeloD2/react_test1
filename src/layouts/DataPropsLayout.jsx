import OpenFile from "../components/OpenFile";
import Test1Screen from "../../tests/DataProps/Test1";
import Test3Screen from "../../tests/DataProps/Test3";
import Nav from "../components/Nav";
import {
  Paper,
  Box,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
const tasks = {
  task_1: {
    component: Test1Screen,
    file: "./tests/DataProps/Test1.jsx",
    desc: "For this test, we want the h1 text to be dynamic so that every instance of this component can display different texts.",
    steps: [
      "Allow the Test1 component to receive a text prop.",
      "Render the Test1 component onto the Test1Screen component.",
      "Pass 'Hello World!' to the Test1 component from the Test1Screen component.",
      "The text prop must be placed inside the h1 element in the Test1 component.",
    ],
  },
  task_2: {
    component: Test3Screen,
    file: "./tests/DataProps/Test3.jsx",
    desc: "For this test, we want to display an object's [ keys ] and [ properties ] on a list.",
    steps: [
      "Map out the person object so it can be displayed in a list.",
      "The object keys should precede the object properties.",
      "Explicitly typing out the object keys is not allowed.",
      " ex: name: Angelo Dato",
    ],
  },
};

const links = [{ title: "Home", url: "/" }];

export default function DataPropsLayout() {
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
