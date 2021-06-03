import React from "react";

import CardRoot from "./CardFolder/CardRoot";
import Carousel from "./CarouselFolder/Carousel";
import Footer from "./FooterFolder/Footer";
import Navbar from "./NavbarFolder/Navbar";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <CardRoot />
      <Footer />
    </div>
  );
}

export default Dashboard;
