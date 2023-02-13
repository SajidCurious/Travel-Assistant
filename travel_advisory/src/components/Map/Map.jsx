import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className="w-[60vw]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDlVUg_BWMXi2oMWzzebNCfwLpPSEEXdhA" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
      />
    </div>
  );
};

export default Map;
