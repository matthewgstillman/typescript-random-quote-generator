import React, { useState, useEffect, FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Quotes from "./Components/Quotes";

const App: FC = () => {
  return (
    <div className="App">
      <h1>Random Quotes Generator</h1>
      <Quotes />
    </div>
  );
};

export default App;
