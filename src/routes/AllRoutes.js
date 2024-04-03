import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Gallery from "../components/Gallery";
import PageNotFound from "../components/PageNotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<LandingPage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="/contactme" element={<ContactMe />} />
      {/* <Route path="gallery/:id" element={<IndividualPhoto />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default AllRoutes;
