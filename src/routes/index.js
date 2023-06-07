import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Notfound from "../pages/Notfound";
import MoviesPopular from "../components/Organism/MoviesPopular";

const routes = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Notfound />,
    path: "*",
  },
  {
    element: <h1>Favourite</h1>,
    path: "/favourite",
  },
  {
    element: <Movie />,
    path: "/movie",
  },
  {
    element: <MoviesPopular />,
    path: "/mpopular",
  },
];

export default routes;
