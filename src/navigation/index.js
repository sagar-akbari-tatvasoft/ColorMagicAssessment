import { createBrowserRouter } from "react-router-dom";
import Detail from "../pages/detail";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
]);
