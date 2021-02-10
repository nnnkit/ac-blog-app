import React from "react";
import Banner from "./Banner";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

function Home(props) {
  return (
    <main>
      <Banner />
      <div className="padding">
        <div className="container col-md-4 item-start">
          <Feed />
          <Sidebar />
        </div>
      </div>
    </main>
  );
}

export default Home;
