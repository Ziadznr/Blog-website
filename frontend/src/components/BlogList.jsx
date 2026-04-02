import React, { useState, useEffect } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;