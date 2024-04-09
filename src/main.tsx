import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { Routes } from "@/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
