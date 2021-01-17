import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Menu from "./Menu";
import moment from "moment";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function Article({
  match: {
    params: { id },
  },
}) {
  const [data, setData] = useState([]);
  const date = moment(data.Date).format("MMMM D, YYYY");

  const url = `http://localhost:1337/articles/${id}`;

  let bannerOptions = [
    "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80",
    "https://images.unsplash.com/photo-1562619371-b67725b6fde2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1496504175726-c7b4523c7e81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1990&q=80",
  ];
  bannerOptions =
    bannerOptions[Math.floor(Math.random() * bannerOptions.length)];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="p-6 lg:p-0">
      <div className="md:p-6 md:bg-gray-800 md:text-white flex items-center">
        <Logo />
        <Menu />
      </div>
      <div className="h-cover-banner overflow-hidden flex items-center">
        <img alt="cover" className="w-100" src={bannerOptions} />
      </div>

      <div className="container mx-auto max-w-5xl text-left -mt-20 p-10 bg-white shadow relative">
        <div className="text-center mb-10">
          <NavLink to="/blog">
            <span className="font-medium hover:underline text-gray-800 uppercase">
              Blog
            </span>
          </NavLink>
          <h1 className="font-semibold text-4xl mb-5 text-gray-800">
            {data.Title}
          </h1>
          <span className="font-light text-gray-600">{date}</span>
        </div>
        <div className="max-w-4xl mx-auto article-body">
          <ReactMarkdown source={data.Body} />
        </div>
      </div>
    </div>
  );
}
export default Article;
