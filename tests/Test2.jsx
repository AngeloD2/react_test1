//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 10 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Stateful Variables ********************/

//======================= Problem Description ==========================/
//For this test, we want the component to reflect a new color.
//Initially, the h1 element is given a color of "blue".
//When the "change color" button is triggered, the background of the h1 element should change from blue to red, and vice-versa.

//******************* Solution Requirements ********************/
//1.) Create a stateful color variable.
//2.) The initial background color of the h1 element should be blue.
//3.) The background color of the h1 element should toggle between red and blue each time the button is triggered.
//4.) The current color's name should be visible on screen within the h1 tag.

//======================= BONUS =======================/
//1.) You can make the text color of the h1 element be the opposite of the current background color.
//if background is blue, text will be red, vice versa.

//******************** Tips ********************
//1.) You can add/remove any react hook you might need to accomplish this test.
//2.) the React import, the component name and the text "Toggle" within the button element should be untouched.
//3.) You can use either function declaration or function expression.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Test2Screen() {
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
    btn: {
      width: 130,
      height: 40,
      borderRadius: 5,
      backgroundColor: "orange",
    },
  };
  
  return (
    <div className="testContainer">
      <h1 style={styles.header}> blue </h1>

      <button style={styles.btn} onClick={() => (color = "red")}>
        Toggle
      </button>
    </div>
  );
}
