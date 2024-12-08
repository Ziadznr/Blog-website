// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs") // Update the URL to your backend
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
