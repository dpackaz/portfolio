import React, { useState } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Portfolio;
