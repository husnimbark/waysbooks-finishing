import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "../src/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { UserContextProvider } from "./context/UserContext";

const client = new QueryClient();

const root = createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
