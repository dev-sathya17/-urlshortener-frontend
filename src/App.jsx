import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import ActivateAccount from "./pages/ActivateAccount";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

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
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
