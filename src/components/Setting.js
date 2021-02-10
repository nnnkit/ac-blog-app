import React from "react";
import { Link } from "react-router-dom";

function Setting(props) {
  return (
    <div className="sm-wrapper padding">
      <form className="form form-login" action="">
        <div className="text-center">
          <legend className="form-legend">Your Setting</legend>
        </div>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="url"
            placeholder="URL of profile picture"
          />
          <input
            className="form-control"
            type="text"
            placeholder="Annie H"
            value="Annie H"
          />
          <textarea
            className="form-control"
            rows="6"
            type="password"
            placeholder="Short bio about you"
          ></textarea>
          <input
            className="form-control"
            type="email"
            placeholder="Annie H"
            value="annie@gmail.com"
          />
          <input
            className="form-control"
            type="password"
            placeholder="New Password"
          />
          <div className="text-right">
            <input
              className="btn btn-primary"
              type="submit"
              value="Update Settings"
            />
          </div>
        </fieldset>
      </form>
      <button className="btn btn-error logout-btn">
        Or click here to logout
      </button>
    </div>
  );
}

export default Setting;
