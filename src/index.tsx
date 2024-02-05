import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  HashRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Contacts from "./routes/Contacts";
import Maps from "./routes/Maps";
import Documents from "./routes/Docs";
import Payment from "./routes/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/maps",
    element: <Maps />,
  },
  {
    path: "/docs",
    element: <Documents />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </HashRouter>
);
