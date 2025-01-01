import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
