import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import BeginnersLayout from "../layouts/Beginners";
import EntryLayout from "../layouts/Entry";
import Test6Screen from "../../tests/Test6";
import Welcome from "../components/Welcome";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Welcome />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/beginner",
        element: <BeginnersLayout />,
      },
      {
        path: "/entry",
        element: <EntryLayout />,
      },
    ],
  },
  {
    path: "/entry/mockup",
    element: <Test6Screen />,
  },
]);
