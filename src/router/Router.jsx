import React from "react";

import { Routes, Route } from "react-router-dom";
import ExplorePublications from "../components/ExplorePublications";
import InfoPost from "../components/InfoPost";
import UserProfile from "../components/UserProfile";

const Router = () => {
  return (
    <Routes>
      <Route index element={<ExplorePublications />} />
      <Route path="/post/:idpost" element={<InfoPost />} />
      <Route path="/user/:iduser" element={<UserProfile />} />
    </Routes>
  );
};

export default Router;
