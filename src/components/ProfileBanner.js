import React from "react";

function ProfileBanner(props) {
  return (
    <section className="profile padding">
      <div className="md-wrapper profile-wrapper text-center">
        <img src="/images/smiley.jpg" alt="Smiley" />
        <h1 className="profile-name">Annie H</h1>
        <div className="follow-btn profile-btn">
          <p>
            + Follow <span>Annie H</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProfileBanner;
