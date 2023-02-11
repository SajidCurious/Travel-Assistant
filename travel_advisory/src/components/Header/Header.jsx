import React from "react";

const Header = () => {
  return (
    <div className="px-8 py-3 w-full bg-blue-800 flex justify-between items-center font-semibold">
      <h6 className="text-white text-2xl">Travel Advisor</h6>
      <div className="flex">
        <h6 className="text-white">Explore New Places</h6>
        <input
          type="text"
          className="outline-none rounded-md px-2 ml-4 bg-blue-200"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Header;
