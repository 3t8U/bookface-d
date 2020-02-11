import React from "react";

var align ={
  position: "left"
}
var navButton = {
    fontSize: "30px",
    borderRadius: "15%",
    backgroundColor: "rgba(0,0,0,0)",

    color: "white"
}

function MiniNav(){
  return(
    <p style={align}><button style={navButton}>Home</button> <button style={navButton}>Notifications</button> <button style={navButton}>Messages</button></p>
  )
}

export default MiniNav;
