import OpenFile from "../components/OpenFile";
import Nav from "../components/Nav";

const tasks = {
  Frontend_Challenge1: {
    file: "./tests/Test6.jsx",
    desc: "For this test, you will be translating a mockup from Figma to html, styled with TailwindCSS.",
    steps: [
      "Use TailwindCSS.",
      "Translate the Figma mockup as best you can.",
      "Layout must be responsive, mobile first.",
      "Click on the links below to open a figma file.",
    ],
  },
};

const links = [{ title: "Home", url: "/" }];

export default function UILayout() {
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
                  <li> <a className="hover:text-blue-400 drop-shadow-md font-semibold text-lg" target="_blank" href="https://www.figma.com/proto/3cEc41DFR8aRARSWfiDY5C/Mobile?type=design&node-id=1-601&t=Qgo7XajmCDwgla14-1&scaling=scale-down&page-id=0%3A1&mode=design"> Mobile </a> </li>
                  <li> <a className="hover:text-blue-400 drop-shadow-md font-semibold text-lg" target="_blank" href="https://www.figma.com/proto/e9fl9BXVDNLppohP36vr58/Desktop?type=design&node-id=1-1775&t=L2CwUaKNQsABBTlr-1&scaling=scale-down&page-id=1%3A1234&mode=design"> Desktop </a> </li>
                  <li> <a className="hover:text-blue-400 drop-shadow-md font-semibold text-lg" target="_blank" href="https://www.figma.com/proto/t8u5FHqkPp6ZWZ5wShCB67/Tablet?type=design&node-id=1-1408&t=P9qa2KhTP4eCOqsK-1&scaling=scale-down&page-id=1%3A1233&mode=design"> Tablet (Portrait) </a> </li>
                  <li> <a className="hover:text-blue-400 drop-shadow-md font-semibold text-lg" target="_blank" href="https://www.figma.com/proto/t8u5FHqkPp6ZWZ5wShCB67/Tablet?type=design&node-id=2001-384&t=8w9AxsspIaC7rRtS-1&scaling=scale-down&page-id=2001%3A374&mode=design"> Tablet (Landscape) </a> </li>
                </ul>
              );
            }
          })}
        </section>
      ))}
    </main>
  );
}
