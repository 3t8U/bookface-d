
import React from 'react';
import TrendingProfile from './TrendingProfile';


var trendDiv = {
  color: "white",
  padding: "5px",
}

var user = {
  color: "white",
  padding: "5px",

  }

function Trends(props){
  return(
    <div style={trendDiv}>
      <div style={user}>
        <TrendingProfile
          username="RagingSockPuppet"/>
      </div>
      <div style={user}>
        <TrendingProfile
          username="Mike202382"/>
      </div>
      <div style={user}>
        <TrendingProfile
          username="Test"/>
      </div>
      <div style={user}>
        <TrendingProfile
          username="Username"/>
      </div>
      <div style={user}>
        <TrendingProfile
          username="Username2"/>
      </div>
    </div>
  );
}

export default Trends;
