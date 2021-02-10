import React from "react";
import FeedNav from "./FeedNav";
import Pagination from "./Pagination";
import Post from "./Post";

function Feed(props) {
  return (
    <section className="span-md-3">
      <FeedNav />
      <Post />
      <Post />
      <Pagination />
    </section>
  );
}

export default Feed;
