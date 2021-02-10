import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <article className="post">
      <header className="flex justify-between item-center">
        <div className=" flex item-center">
          <Link to="/profile">
            <img className="author-img" src="/images/smiley.jpg" alt="Smiley" />
          </Link>
          <div className="post-details">
            <Link to="/profile">
              <p className="post-author">Annie</p>
            </Link>
            <time className="post-time" datetime="">
              Wed Feb 10 2021
            </time>
          </div>
        </div>
        <div className="like-btn">
          <span>&hearts;</span>
          <span>1</span>
        </div>
      </header>
      <Link to="/singlepost">
        <div className="post-body">
          <h2 className="post-title">Hello World!</h2>
          <p className="post-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            saepe expedita in odio repellendus unde nam! Natus, perspiciatis ut.
            Neque id quidem alias, quam reprehenderit quasi doloribus
            necessitatibus voluptatibus repellat.
          </p>
        </div>
      </Link>
      <footer>
        <Link className="read-more-btn" to="/singlepost">
          Read More
        </Link>
      </footer>
    </article>
  );
}

export default Post;
