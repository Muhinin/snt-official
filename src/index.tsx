import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Contacts from "./routes/Contacts";
import Maps from "./routes/Maps";
import Documents from "./routes/Docs";
import Payment from "./routes/Payment";

const routes = [
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
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
