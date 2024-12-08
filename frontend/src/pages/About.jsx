// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>About Us</h1>
        <p>We are a blog agency providing the best content for our readers.</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
