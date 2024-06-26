//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 15 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Mapping Objects ********************/

//======================= Problem Description ==========================/
//For this test, we want to display an object's keys and properties on a list.

//******************* Solution Requirements ********************/
//1.) Map out the person object so it can be displayed in a list.
//2.) The object keys should precede the object properties.
//2a.) ex: name: Angelo Dato
//3.) Explicitly typing out the object keys is not allowed.

//******************** Tips ********************
//1.) You can add/remove any react hook you might need to accomplish this test.
//2.) You can use either function declaration or function expression.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
export default function Test3Screen() {
  const people = {
    name: "Angelo Dato",
    age: 24,
    height: "5'9",
    complexion: "Brown",
  };

  return (
    <Box className="testCont">
      <Typography> Details: </Typography>
      <List>
        <ListItem>
          <ListItemText> Name: {people.name} </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}
