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
//2.) ex: name: Angelo Dato

//******************** Tips ********************
//1.) You can add/remove any react hook you might need to accomplish this test.
//2.) You can use either function declaration or function expression.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Test3() {
  var color = "blue";

  const styles = {
    header: {
      backgroundColor: color,
      color: "white",
      height: "20%",
      width: "100%",
      fontSize: "2rem",
      textAlign: "center",
      borderRadius: 4,
      fontWeight: 600,
    },
  };

  const people = {
    name: "Angelo Dato",
    age: 24,
    height: "5'9",
    complexion: "Brown",
  };

  return (
    <div className="testContainer">
      <h1 style={styles.header}> blue </h1>

      <ul>
        <li> {people.name} </li>
      </ul>
    </div>
  );
}
