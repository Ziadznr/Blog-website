// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Our Blog</h1>
        <BlogList />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
