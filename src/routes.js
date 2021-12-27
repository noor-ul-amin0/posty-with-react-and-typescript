import BlogPosts from "./containers/BlogPosts";
import Home from "./components/Home";
import UsersList from "./containers/UsersList";
import { Profile } from "./containers/Profile";
import { Navigate } from "react-router";

const routes = (isLoggedIn) => [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts",
    element: <BlogPosts />,
  },
  {
    path: "/users",
    element: <UsersList />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path: "/posts",
  //   element: !isLoggedIn ? <Navigate to="/" /> : <BlogPosts />,
  // },
  // {
  //   path: "/users",
  //   element: !isLoggedIn ? <Navigate to="/" /> : <UsersList />,
  // },
  // {
  //   path: "/profile",
  //   element: !isLoggedIn ? <Navigate to="/" /> : <Profile />,
  // },
];

export default routes;
