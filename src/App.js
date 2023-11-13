
import './App.css';
import { router } from "./Routers/router";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query'
import React from "react";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}><RouterProvider router={router} /></QueryClientProvider>
  );
}

export default App;
