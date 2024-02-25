import React from 'react';
import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  console.log("currentUser:", currentUser); // Log currentUser for debugging

  // Check if currentUser is null or undefined
  if (!currentUser) {
    return <div>Loading...</div>; // Or any other fallback UI
  }

  // Construct the URL for the profile picture
  const profilePicUrl = `/upload/${currentUser.profilePic}`;

  console.log("profilePicUrl:", profilePicUrl); // Log profilePicUrl for debugging

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={profilePicUrl} alt="Profile" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="Friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="Groups" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Watch} alt="Watch" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="Memories" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        {/* Add other content */}
      </div>
    </div>
  );
};

export default LeftBar;
