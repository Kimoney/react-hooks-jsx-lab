import React from "react";
import { name, city } from "../data/data.js";

const h1Style = {
  color: "firebrick",
  backgroundColor: "yellow",  
};

function Home() {
  return (
  <div id="home">
    <h1 style={h1Style}>Your {name} is a Web Developer from Your {city} </h1>
  </div>
  );
}

export default Home;
