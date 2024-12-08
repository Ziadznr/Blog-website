// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Welcome to Blog Agency</h1>
        <BlogList />
      </div>
      <Footer />
    </>
  );
};

export default Home;

