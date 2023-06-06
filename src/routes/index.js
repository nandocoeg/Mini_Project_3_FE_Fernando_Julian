import Home from "../pages/Home";
import Movie from "../pages/Movie";
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
  {
    element: <Movie />,
    path: "/movie",
  },
];

export default routes;
