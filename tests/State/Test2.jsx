//***** Written by: Angelo Dato ******/
//***** Difficulty: Beginner Level *****/
//***** Est. Time: 10 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Stateful Variables ********************/

//======================= Problem Description ==========================/
//For this test, we want the component to reflect a new color.
//Initially, the h1 element is given a color of "lemonchiffon".
//When the "change color" button is triggered, the background of the h1 element should change from lemonchiffon to coral, and vice-versa.

//******************* Solution Requirements ********************/
//1.) Create a stateful color variable.
//2.) The initial background color of the Typography element should be lemonchiffon.
//3.) Clicking the button should toggle Typography's background color between Coral and Lemonchiffon.
//4.) The text color of the Typography element should be opposite its current background color.
//5.) The current color's name should be visible on screen within the Typography tag.

//======================= BONUS =======================/
//1.) You can make the text color of the h1 element be the opposite of the current background color.
//if background is lemonchiffon, text will be coral, vice versa.

//******************** Tips ********************
//1.) You can add/remove any react hook you might need to accomplish this test.
//2.) the React import, the component name and the text "Toggle" within the button element should be untouched.
//3.) You can use either function declaration or function expression.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Test2Screen() {
  var color = "LEMONCHIFFON";
  var color2 = "CORAL";

  return (
    <Box sx={{paddingY: 4}}>
      <Box className="stateComp">
        <Typography
          sx={{ p: 3, backgroundColor: color, width: '90%', textAlign: 'center'}}
        >
          Lemonchiffon
        </Typography>

        <Button variant="contained" onClick={() => (color = "coral")} sx={{width: '50%'}}>
          Toggle
        </Button>
      </Box>
    </Box>
  );
}
