//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 2 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Conditional Rendering ********************/

//======================= Problem Description ==========================/
// For this test, you will be making use of Conditional Rendering.
// When we process a request, we should render an element to indicate
// that the system is working towards fulfilling the request.

//******************* Solution Requirements ********************/
//1.) Create a stateful variable named 'loading' along with its setter..
//2.) Simulate a function that sends a request using the timeout function.
//3.) Upon click of the button, the function will run.
//4.) After the function is run, the application will enter a loading state.
//5.) During the loading state, replace the button element with the imported <Loader /> component.
//6.) After completing the request, bring back the button element.

//******************** Tips ********************
//1.) You can use either function declaration or function expression.
//2.) The hooks you need to accomplish this task are already imported in this component.

// ----------------------------------------------------------------------------------//

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Loader from "../../src/components/Loader";
import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
//default component.
export default function Test5Screen() {
  function mockRequest() {
    setTimeout(() => {}, 1500);
  }
  return (
    <Box className="testContainer">
      <Box className="stateComp">
        <Button
          variant="contained"
          sx={{
            width: 200,
            height: 45,
          }}
          onClick={mockRequest}
        >
          Send Request
        </Button>
      </Box>
    </Box>
  );
}
