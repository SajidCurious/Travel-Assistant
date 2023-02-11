import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className="w-[60vw]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "w2FfyHHve6TzZogUG4zs	" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      />
    </div>
  );
};

export default Map;
