import React from "react";
import { Link } from "react-router-dom";

function NewPost(props) {
  return (
    <div className="md-wrapper padding">
      <form className="form form-login" action="">
        <fieldset className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Article Title"
          />
          <input
            className="form-control"
            type="text"
            placeholder="What's this article is all about?"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Write your article(In markdown format)"
          ></textarea>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Tags"
          />
          <div className="text-right">
            <input
              className="btn btn-primary"
              type="submit"
              value="Publish Article"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default NewPost;
