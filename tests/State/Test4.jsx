//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 10 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: React Context ********************/

//======================= Problem Description ==========================/
// For this test, you will be making use of React Context.
// We have a variable named person, and we want this variable
// to be available throughout the application without having to
// redefine it in every instance.

//******************* Solution Requirements ********************/
//1.) Use React Context.
//2.) Make the setter variable in your context available to the 'SetValuesHere' component.
//3.) The 'newPerson' variable is already defined.
//4.) When you click the 'set' button, it will set the value of 'newPerson' to the 'person' variable.
//5.) This 'person' variable must now be available throughout the application without redefining it.
//6.) When the 'person' variable changes values, all components subscribed to it should display the changes.

//******************** Tips ********************
//1.) You can use either function declaration or function expression.
//2.) The hooks you need to accomplish this task are already imported in this component.

// ----------------------------------------------------------------------------------//

import { Box, Typography } from "@mui/material";
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useContext, createContext } from "react";
import { Button } from "@mui/material";

//This is your context variable.
const PersonContext = createContext();

//This is your context provider component
function Context({ children }) {
  const BaseContext = {
    name: "",
    age: "",
    height: "",
    complexion: "",
  };

  const person = BaseContext;

  return <PersonContext.Provider value={{}}>{children}</PersonContext.Provider>;
}

//set values here.
function SetterComponent() {
  const setPerson = () => undefined;

  const newPerson = {
    name: "Jrue Holiday",
    age: "34",
    height: "1.93m",
    complexion: "dark",
  };

  return (
    <Button
      variant="contained"
      sx={{
        width: 200,
        height: 45,
      }}
      onClick={() => setPerson()}
    >
      Set
    </Button>
  );
}

//access and display 'person' details here.
function Screen() {
  const person = "Jordan Ripley";

  return (
    <Box className="testContainer">
      <Box className="stateComp">
        <Typography> {person ? person.name : "No name found."} </Typography>
        <SetterComponent />
      </Box>
    </Box>
  );
}

//default component.
export default function Test4Screen() {
  return <Screen />;
}
