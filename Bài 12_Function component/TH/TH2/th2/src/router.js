import { Link, Outlet, createBrowserRouter, useNavigate } from "react-router-dom";
import PostDetails from "./postDetail";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout/>

    ),
    children: [
      {
        path: "/home",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>About us</div>,
      },
      {
        path: '/post/:postId',
        element: <PostDetails />
      }
    ],
  },
]);

export default router;
