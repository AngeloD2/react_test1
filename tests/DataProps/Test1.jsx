//***** Written by: Angelo Dato ******/
//***** Difficulty: Beginner *****/
//***** Est. Time: 5 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Props ********************/

//======================= Problem Description ==========================/
// For this test, we want the h1 text to be dynamic so that every instance
// of this component can display different texts.
// Initially, the h1 element displays a blank string.

//******************* Solution Requirements ********************/
//1.) Allow the Test1 component to receive a text prop.
//2.) Render the Test1 component onto the Test1Screen component.
//3.) Pass "Hello World!" to the Test1 component from the Test1Screen component.
//4.) The text prop must be placed inside the h1 element in the Test1 component.

//******************** Tips ********************
//1.) You can add/remove any react hook you might need to accomplish this test.
//2.) the React import and the component name should be untouched.
//3.) You can use either function declaration or function expression.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types

function Test1() {
  return <Typography> Show props here </Typography>;
}

export default function Test1Screen() {
  return (
    <Box className="testCont">
      <Test1 />
    </Box>
  );
}
