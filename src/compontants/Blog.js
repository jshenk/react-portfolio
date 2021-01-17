import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import Menu from "./Menu";
import Logo from "./Logo";

function Blog() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:1337/articles/");
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="lg:p-0 p-6">
      <div className="md:p-6 md:bg-gray-800 md:text-white flex items-center">
        <Logo />
        <Menu />
      </div>
      <div class="w-full">
        <div className="overflow-hidden h-cover-banner flex items-center">
          <img src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 md:text-4xl my-10 text-center">
          Blog
        </h1>
      </div>
      <div className="container mx-auto mb-10 text-left">
        <div className="flex justify-between">
          <div className="max-w-4xl mx-auto">
            {data.map((item) => (
              <BlogCard
                title={item.Title}
                description={item.description}
                date={item.Date}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
