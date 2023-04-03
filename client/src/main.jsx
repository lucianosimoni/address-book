import "./assets/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Contacts from "./pages/Contacts/Contacts";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/contacts", element: <Contacts /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
