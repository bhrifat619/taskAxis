import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTasks from "../pages/AddTasks/AddTasks";
import PrivateRoutes from "./PrivateRoute";
import BrowseTasks from "../pages/BrowseTasks/BrowseTasks";
import MyPostedTasks from "../pages/MyPostedTasks/MyPostedTasks";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Spinner from "../components/Spinner";
import TaskDetails from "../pages/TaskDetails/TaskDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UpdateTask from "../pages/UpdateTask/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("http://localhost:3000/tasks/featureTask"),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/addTasks",
        element: (
          <PrivateRoutes>
            <AddTasks />
          </PrivateRoutes>
        ),
      },
      {
        path: "/browseTasks",
        Component: BrowseTasks,
        loader: () => fetch("http://localhost:3000/tasks"),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/tasks/:id",
        element: (
          <PrivateRoutes>
            <TaskDetails />
          </PrivateRoutes>
        ),
        loader: ({params}) =>
          fetch(`http://localhost:3000/tasks/${params.id}`),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/updateTask/:id",
        element: (
          <PrivateRoutes>
            <UpdateTask />
          </PrivateRoutes>
        ),
        loader: ({params}) =>
          fetch(`http://localhost:3000/tasks/${params.id}`),
        hydrateFallbackElement: <Spinner />,
      },
      {
        path: "/myPostedTasks",
        element: (
          <PrivateRoutes>
            <MyPostedTasks />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
export default router;
