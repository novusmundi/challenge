import React from "react";

import { Routes, Route } from "react-router-dom";
import ExplorePublications from "../components/ExplorePublications";
import InfoPost from "../components/InfoPost";

const Router = () => {
  return (
    <Routes>
      <Route index element={<ExplorePublications />} />
      <Route path="/post/:idpost" element={<InfoPost />} />
    </Routes>
  );
};

export default Router;
