import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import ActivateAccount from "./pages/ActivateAccount";
import Login from "./pages/Login";
import Dashboard, { userLoader } from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Verify from "./pages/Verify";
import ViewURLs, { urlLoader } from "./pages/ViewURLs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/users/activate/:id",
    element: <ActivateAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: userLoader,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "/verify/:authString",
    element: <Verify />,
  },
  {
    path: "/view",
    element: <ViewURLs />,
    loader: urlLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
