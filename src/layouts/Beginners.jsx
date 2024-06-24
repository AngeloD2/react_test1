import OpenFile from "../components/OpenFile";
import Test1Screen from "../../tests/Test1";
import Test2Screen from "../../tests/Test2";
import Test3Screen from "../../tests/Test3";
import Nav from "../components/Nav";

const tasks = {
  task_1: {
    component: Test1Screen,
    file: "./tests/Test1.jsx",
    desc: "For this test, we want the h1 text to be dynamic so that every instance of this component can display different texts.",
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
      "The initial background color of the h1 element should be LEMONCHIFFON.",
      "The background color of the h1 element should toggle between CORAL and LEMONCHIFFON when the button is triggered.",
      "The current color's name should be visible on screen within the h1 tag.",
    ],
  },
  task_3: {
    component: Test3Screen,
    file: "./tests/Test3.jsx",
    desc: "For this test, we want to display an object's [ keys ] and [ properties ] on a list.",
    steps: [
      "Map out the person object so it can be displayed in a list.",
      "The object keys should precede the object properties.",
      "Explicitly typing out the object keys is not allowed.",
      " ex: name: Angelo Dato",
    ],
  },
};

const links = [{ title: "Home", url: "/" }];

export default function BeginnersLayout() {
  return (
    <main className="beginners">
      <Nav links={links} />
      {Object.keys(tasks).map((key) => (
        <section key={tasks[key]}>
          {Object.keys(tasks[key]).map((nestedKey) => {
            console.log(tasks[key][nestedKey]);
            if (nestedKey === "component") {
              const Component = tasks[key][nestedKey];
              return <Component key={tasks[key]} />;
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
