import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error404";
import ReactPage from "./new_react";
import SagaPage from "./saga";
import ThunkPage from "./thunk";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/thunk",
        element: <ThunkPage />,
      },
      {
        path: "/newReact",
        element: <ReactPage />,
      },
      {
        path: "/saga",
        element: <SagaPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
