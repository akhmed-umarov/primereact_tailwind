import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error404";
import AboutPage from "./about";
import HomePage from "./home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
