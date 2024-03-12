import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home/Home";
import { Toaster } from "react-hot-toast";
import Main from "./LayOut/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
    element: <Home></Home>,
      },
    //   {
    //     path: "/aboutMe",
    // element: <AboutMe></AboutMe>,
    //   },
    //   {
    //     path: "/skills",
    // element: <Skills></Skills>,
    //   },
    //   {
    //     path: "/projects",
    // element: <Projects></Projects>,
    //   },
    //   {
    //     path:'/contactMe',
    //     element:<ContactMe></ContactMe>
    //   }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-[1300px] mx-auto">
      <RouterProvider router={router} />
      <Toaster/>
    </div>
  </React.StrictMode>
);
