import React from "react";
import ReactDOM from "react-dom/client";
import OpenFile from "./components/OpenFile";
import Test2Screen from "../tests/Test2";
import Test1Screen from "../tests/Test1";
import "./index.css";

const tasks = {
  task_1: {
    component: Test1Screen,
    file: "./tests/Test1.jsx",
    steps: [
      "Allow the Test1 component to receive a text prop.",
      "Render the Test1 component onto the Test1Screen component.",
      "Pass 'Hello World!' to the Test1 component from the Test1Screen component.",
      "The text prop must be placed inside the h1 element in the Test1 component.",
    ],
  },
  task_2: {
    component: Test2Screen,
    file: "./tests/Test2.jsx",
    steps: [
      "Create a stateful 'color' variable.",
      "The initial background color of the h1 element should be blue.",
      "The background color of the h1 element should toggle between red and blue when the button is triggered.",
      "The current color's name should be visible on screen within the h1 tag.",
    ],
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="appContainer">
      {Object.keys(tasks).map((key) => (
        <section key={tasks[key]}>
          {Object.keys(tasks[key]).map((nestedKey) => {
            console.log(tasks[key][nestedKey]);
            if (nestedKey === "component") {
              // Render the component
              const Component = tasks[key][nestedKey];
              return <Component key={key} />;
            }
            if (Array.isArray(tasks[key][nestedKey])) {
              return (
                <ul key={key}>
                  <span>
                    <h2> {key.split("_").join(": ")} </h2>
                    <OpenFile url={tasks[key].file} />
                  </span>
                  {tasks[key][nestedKey].map((item, index) => (
                    <li key={item}>
                      {index + 1}.) {item}
                    </li>
                  ))}
                </ul>
              );
            }
          })}
        </section>
      ))}
    </main>
  </React.StrictMode>
);
