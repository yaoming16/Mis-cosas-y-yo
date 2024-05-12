import React from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import SearchPage from "../components/SearchPage";
//const SearchPage = lazy(() => import("../components/SearchPage"));
import "../index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchPage />
  </React.StrictMode>
);
