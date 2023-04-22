import React from "react";

import { Routes, Route } from "react-router-dom";

import Registration from "../Registration";

const App = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
