import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error404";
import AboutPage from "./about";
import HomePage from "./home";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
