import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import Menu from "./Menu";
import Banner from "./Banner";

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
    <div>
      <div className="md:p-6 md:bg-gray-800 md:text-white flex items-center">
        <Menu />
      </div>
      <Banner title={"Blog"} />

      <div className="container mx-auto mt-20  mb-20 text-left px-6 lg:px-0">
        <div className="text-center bg-green-200 p-2">
          <h2>Comming Soon!</h2>
        </div>
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
  );
}
export default Blog;
