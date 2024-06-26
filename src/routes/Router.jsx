import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import DataPropsLayout from "../layouts/DataPropsLayout";
import StateLayout from "../layouts/StateLayout";
import UILayout from "../layouts/UI";
import Test6Screen from "../../tests/UI/Test6";
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
        path: "/dataprops",
        element: <DataPropsLayout />,
      },
      {
        path: "/state",
        element: <StateLayout />,
      },
    ],
  },
  {
    path: "/ui",
    element: <UILayout />,
  },
  {
    path: "/ui/test",
    element: <Test6Screen />,
  },
]);
