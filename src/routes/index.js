import Home from "../pages/Home";
import Notfound from "../pages/Notfound";

const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Notfound />,
    path: "*",
  },
  //   {
  //     element: <Login />,
  //     path: "/login",

  //   },
  {
    element: <h1>Favourite</h1>,
    path: "/favourite",
  },
];

export default routes;
