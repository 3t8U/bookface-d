import React from 'react';

var icon = {
  width: "70px",
  float: "left",
  padding: "5px",
  margin: "5px",
  borderRadius:"15%"
}

function TrendingProfile(props){
  return(
    <p>
      <img style={icon} src="https://png.pngtree.com/png-vector/20191110/ourlarge/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"></img> <br/>
      {props.username}<br/>
    <button>Button</button>
  </p>
  );
}

export default TrendingProfile;
