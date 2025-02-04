import React from "react";
import "./app.css";
import { Home } from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Trademark } from "./components/Trademark/Trademark";
import { Footer } from "./components/Footer/Footer";
import Blogs from "./pages/Blogs";
import BlogsDetail from "./pages/BlogsDetail";
import Gallery from "./Pages/GalleryPage/Gallery";
import About from "./Pages/AboutPage/About";
// import VolunteerPage from "./Pages/VolunteerPage";
// import FAQ from "./pages/FAQ";
import Resources from "./Pages/Resources";
import ResourceDetails from "./Pages/ResourceDetails";
import ResourcesList from "./Pages/ResourcesList";
import DonationPage from "./pages/DonationPage/DonationPage";
import Contacts from "./Pages/Contacts";
import WhatWeDo from "./Pages/WhatWeDo";
import WhatWeDoProjects from "./Pages/WhatWeDoProjects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetInvolved from "./Pages/GetInvolved";
import ProjectDetails from "./Pages/ProjectDetails";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/volunteers" element={<VolunteerPage />} /> */}
          {/* <Route path="faq" element={<FAQ />} /> */}
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:id" element={<ResourcesList />} />
          <Route path="resource-details/:id" element={<ResourceDetails />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetail />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/whatwedo/projects/:id" element={<WhatWeDoProjects />} />
          <Route
            path="/whatwedo/projects/details/:id"
            element={<ProjectDetails />}
          />
        </Routes>
        <Footer />
        <Trademark />
      </Router>
    </>
  );
}

export default App;
