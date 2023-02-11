import React from "react";
import List from "./List/List";
import Map from "./Map/Map";

const Hero = () => {
  return (
    <div className="flex">
      <List />
      <Map />
    </div>
  );
};

export default Hero;
