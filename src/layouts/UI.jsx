import OpenFile from "../components/OpenFile";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";

const tasks = {
  React_Challenge1: {
    file: "./tests/UI/Test6.jsx",
    desc: "For this test, you will be translating a mockup from Figma to html, styled with TailwindCSS & incorporating MUIv5.",
    steps: [
      "Clone the Github repo.",
      "Use TailwindCSS.",
      "Use MUIv5.",
      "Translate the Figma mockup as best you can.",
      "Layout must be responsive, mobile first.",
      "Click on the links below to open the concerned links.",
    ],
  },
};

const links = [{ title: "Home", url: "/" }];

export default function UILayout() {
  const navigate = useNavigate();
  return (
    <main className="ui">
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
                  <li className="flex flex-col">
                    <a
                      className="hover:text-blue-400 drop-shadow-md font-semibold text-lg"
                      target="_blank"
                      href="https://www.figma.com/design/OFiAn45eYwzYAdLBRONtDP/Onboarding-Test?node-id=0-1&t=DGMpvX7QfkFJk7ZF-1"
                    >
                      Figma
                    </a>
                    {/* <a
                      className="hover:text-blue-400 drop-shadow-md font-semibold text-lg"
                      target="_blank"
                      href="https://github.com/AngeloD2/ecv_react_challenge2"
                    >
                      Github Repo
                    </a> */}
                  </li>
                  <li>
                    Once you're done, upload the codebase to a public Github url
                    under your account & Send us the URL
                  </li>

                  <a
                    className="hover:text-blue-400 drop-shadow-md font-semibold text-lg"
                    target="_blank"
                    href="http://localhost:5173/ui/test"
                  >
                    Click here to open the route in your browser.
                  </a>
                </ul>
              );
            }
          })}
        </section>
      ))}
    </main>
  );
}
