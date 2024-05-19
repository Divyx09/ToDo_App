import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Component/Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/dasboard.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
);
