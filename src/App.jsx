import React from "react";
import Gallery from "./component/gallery";
import { BrowserRouter, Route, Routes } from "react-router";
import GalleryFiltered from "./component/galleryFiltered";

const App = () => {
  return (
    <div className="bg-neutral-900">
      <BrowserRouter>
        <Routes>
          <Route path="/:page?" element={<Gallery />} />
          <Route
            path="/:startDate/:endDate?/:page"
            element={<GalleryFiltered />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
