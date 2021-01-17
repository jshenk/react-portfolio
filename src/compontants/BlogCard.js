import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const date = moment(props.date).format("MMMM Do, YYYY");
  return (
    <Link to={`/article/${props.id}`} state={props.id}>
      <div class="mt-6">
        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600"> {date}</span>
          </div>
          <div class="mt-2">
            <h2 class="text-2xl text-gray-800 font-bold">{props.title}</h2>
            <p class="mt-2 text-gray-600">{props.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default BlogCard;
