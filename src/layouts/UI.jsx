import OpenFile from "../components/OpenFile";
import Nav from "../components/Nav";
import {
  Container,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const tasks = {
  React_Challenge1: {
    file: "./tests/UI/Test6.jsx",
    desc: "For this test, you will be translating a mockup from Figma to html, styled with TailwindCSS & incorporating MUIv5.",
    steps: [
      "Use TailwindCSS.",
      "Use MUIv5.",
      "Translate the Figma mockup as best you can.",
      "Layout must be responsive, mobile first.",
      "All necessary assets can be found in the public folder.",
      "Click on the links below to open the concerned links.",
    ],
  },
};

const links = [{ title: "Home", url: "/" }];

export default function UILayout() {
  const navigate = useNavigate();
  return (
    <>
      <Nav links={links} />
      <Container maxWidth="lg">
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
                  <Paper
                    variant="elevation"
                    key={key}
                    className="px-8 py-4 md:w-1/2"
                  >
                    <Box className="py-4">
                      <Typography
                        variant="h4"
                        className="first-letter:capitalize"
                      >
                        {key.split("_").join(": ")}
                      </Typography>
                      <OpenFile url={tasks[key].file} />
                    </Box>
                    <Box style={{ marginBottom: 24 }}>
                      <b> Description: </b>
                      <p className="text-wrap"> {tasks[key].desc} </p>
                    </Box>
                    <List dense>
                      {tasks[key][nestedKey].map((item, index) => (
                        <ListItem key={item}>
                          <ListItemText>
                            {index + 1}.) {item}
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                    <Stack direction="row" spacing={4} sx={{paddingX: 2}}>
                      <Link
                        target="_blank"
                        href="https://www.figma.com/design/OFiAn45eYwzYAdLBRONtDP/Onboarding-Test?node-id=0-1&t=DGMpvX7QfkFJk7ZF-1"
                      >
                        <ListItemText>Figma</ListItemText>
                      </Link>
                      <Link
                        target="_blank"
                        href="http://localhost:5173/ui/test"
                      >
                        <ListItemText>Click here to see your work</ListItemText>
                      </Link>
                    </Stack>
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

// <main className="ui">
//   <Nav links={links} />
//   {Object.keys(tasks).map((key) => (
//     <section key={tasks[key]}>
//       {Object.keys(tasks[key]).map((nestedKey) => {
//         console.log(tasks[key][nestedKey]);
//         if (nestedKey === "component") {
//           const Component = tasks[key][nestedKey];
//           return <Component key={key} />;
//         }
//         if (Array.isArray(tasks[key][nestedKey])) {
//           return (
//             <ul key={key} style={{ height: "auto" }}>
//               <span>
//                 <h2> {key.split("_").join(": ")} </h2>
//                 <OpenFile url={tasks[key].file} />
//                 <a
//                   className="text-blue-500 hover:text-blue-700 underline drop-shadow-md font-semibold text-lg"
//                   target="_blank"
//                   href="http://localhost:5173/ui/test"
//                 >
//                   Click here to open the route in your browser.
//                 </a>
//               </span>
//               <div style={{ marginBottom: 24 }}>
//                 <p>
//                   <b> Description: </b>
//                 </p>
//                 <p> {tasks[key].desc} </p>
//               </div>
//               {tasks[key][nestedKey].map((item, index) => (
//                 <li key={item}>
//                   {index + 1}.) {item}
//                 </li>
//               ))}
//               <li className="flex flex-col">
//                 <a
//                   className="hover:text-blue-400 drop-shadow-md font-semibold text-lg"
//                   target="_blank"
//                   href="https://www.figma.com/design/OFiAn45eYwzYAdLBRONtDP/Onboarding-Test?node-id=0-1&t=DGMpvX7QfkFJk7ZF-1"
//                 >
//                   Figma
//                 </a>
//                 {/* <a
//                   className="hover:text-blue-400 drop-shadow-md font-semibold text-lg"
//                   target="_blank"
//                   href="https://github.com/AngeloD2/ecv_react_challenge2"
//                 >
//                   Github Repo
//                 </a> */}
//               </li>
//               <li>
//                 Once you're done, upload the codebase to a public Github url
//                 under your account & Send us the URL
//               </li>
//             </ul>
//           );
//         }
//       })}
//     </section>
//   ))}
// </main>
