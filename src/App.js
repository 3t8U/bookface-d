import React from 'react';

import './App.css';

import Header from "./Header";
import Badge from "./Badge";
import Feed from "./Feed";
import Trends from "./Trends";

var header = {
  width: "100%",
  margin: "10px"
}

var leftColumn = {
  width: "31%",
  border: "2px solid",
  borderRadius: "15%",
  borderColor: "blue",
  position: "absolute",
  left: "1.5%"
}

var centerColumn = {
  width: "31%",
  border: "2px solid",
  borderRadius: "15%",
  borderColor: "blue",
  position: "absolute",
  left: "35%"
}

var rightColumn = {
  width: "31%",
  border: "2px solid",
  borderRadius: "15%",
  borderColor: "blue",
  position: "absolute",
  left: "67.5%"
}


function App() {
  return (
      <div className="row">
        <div style={header}>
          <Header/>
        </div>
        <div style={leftColumn}>
          <Badge/>
        </div>
        <div style={centerColumn}>
          <Feed/>
        </div>
        <div style={rightColumn}>
          <Trends/>
        </div>
      </div>
  );
}

export default App;
