import React from "react";

var icon = {
  width: "70px",
  float: "left",
  padding: "5px",
  margin: "5px",
  borderRadius:"15%"
}

var badge = {
  color: "white"
}

function Badge(){
  return(
    <div style={badge}>
      <p><img style={icon} alt="profile-picture" src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"></img><br/>TEST</p>
      <br/>
      <p>TWEETS FOLLOWING FOLLOWERS</p>
    </div>

  );
}

export default Badge;
