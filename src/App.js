
import './App.css';
import {router} from "./routers/router";
import {RouterProvider} from "react-router-dom";
import React from "react";

function App() {

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
