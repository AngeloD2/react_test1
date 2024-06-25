import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import BeginnersLayout from "../layouts/Beginners";
import EntryLayout from "../layouts/Entry";
import UILayout from "../layouts/UI";
import Test6Screen from "../../tests/Test6";
import Test7Screen from "../../tests/Test7";
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
    path: "/ui",
    element: <UILayout />,
  },
  {
    path: "/ui/1",
    element: <Test6Screen />,
  },
  {
    path: "/ui/2",
    element: <Test7Screen />,
  },
]);
