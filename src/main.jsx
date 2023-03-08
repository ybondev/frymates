import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import App from "./App";

// BOOTSTRAP
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.scss";

import "./index.css";
import Manifesto from "./pages/Manifesto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/manifesto" element={<Manifesto />} />
    </Routes>
  </Router>
);
