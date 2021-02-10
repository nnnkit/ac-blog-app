import React from "react";
import Banner from "./Banner";
import FeedNav from "./FeedNav";
import Pagination from "./Pagination";
import Post from "./Post";
import ProfileBanner from "./ProfileBanner";

function Profile(props) {
  return (
    <section>
      <ProfileBanner />
      <div className="padding">
        <div className="md-wrapper">
          <FeedNav />
          <Post />
          <Post />
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default Profile;
