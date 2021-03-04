import React from "react";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="my-5">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
