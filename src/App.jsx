import React from "react";
import Gallery from "./component/gallery";
import { BrowserRouter, Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="bg-neutral-900">
      <BrowserRouter>
        <Routes>
          <Route path="/:page?" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
