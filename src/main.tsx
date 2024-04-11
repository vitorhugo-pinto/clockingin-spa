import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { Routes } from "@/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={client}>
        <Routes />
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
