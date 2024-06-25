import OpenFile from "../components/OpenFile";
import Test4Screen from "../../tests/Test4";
import Test5Screen from "../../tests/Test5";
import Nav from "../components/Nav";

const tasks = {
  task_1: {
    component: Test4Screen,
    file: "./tests/Test4.jsx",
    desc: "For this test, you will be making use of React Context. We have a variable named person, and we want this variable to be available throughout the application without having to redefine it in every instance.",
    steps: [
      "Use React Context.",
      "Make the setter variable in your context available to the 'SetValuesHere' component.",
      "The 'newPerson' variable is already defined.",
      "When you click the 'set' button, it will set the value of 'newPerson' to the 'person' variable.",
      "This 'person' variable must now be available throughout the application without redefining it.",
      "When the 'person' variable changes values, all components subscribed to it should display the changes.",
    ],
  },
  task_2: {
    component: Test5Screen,
    file: "./tests/Test5.jsx",
    desc: "For this test, you will be making use of Conditional Rendering. When we process a request, we should render an element to indicate that the system is working towards fulfilling the request.",
    steps: [
      "Create a stateful variable named 'loading' along with its setter..",
      "Simulate a function that sends a request using the timeout function.",
      "Upon click of the button, the function will run.",
      "After the function is run, the application will enter a loading state.",
      "During the loading state, display the imported <Loader /> component.",
      "After completing the request, hide the <Loader /> component.",
    ],
  },
  task_3: {
    file: "./tests/Test6.jsx",
    desc: "For this test, you will be translating a mockup from Figma to html, styled with TailwindCSS.",
    steps: [
      "Use TailwindCSS.",
      "Translate the Figma mockup as best you can.",
      "You have 45 minutes to accomplish this task.",
      "Layout must be responsive, mobile first.",
    ],
  },
};

const links = [{ title: "Home", url: "/" }];

export default function EntryLayout() {
  return (
    <main className="entry">
      <Nav links={links} />
      {Object.keys(tasks).map((key) => (
        <section key={tasks[key]}>
          {Object.keys(tasks[key]).map((nestedKey) => {
            console.log(tasks[key][nestedKey]);
            if (nestedKey === "component") {
              const Component = tasks[key][nestedKey];
              return <Component key={key} />;
            }
            if (Array.isArray(tasks[key][nestedKey])) {
              return (
                <ul key={key} style={{ height: "auto" }}>
                  <span>
                    <h2> {key.split("_").join(": ")} </h2>
                    <OpenFile url={tasks[key].file} />
                  </span>
                  <div style={{ marginBottom: 24 }}>
                    <p>
                      <b> Description: </b>
                    </p>
                    <p> {tasks[key].desc} </p>
                  </div>
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
  );
}
