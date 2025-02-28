import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationSearchPanel = (props) => {
  //sample array of locations
  const locations = [
    "10A, Opposite Central Mall, Code Masters Academy, Mumbai",
    "15C, Beside Green Park, DevX Training Center, Bangalore",
    "32D, Near Metro Station, Tech Innovators Hub, Hyderabad",
    "7B, Adjacent to City Library, FullStack Pro Institute, Chennai",
    "21E, Behind Market Square, JavaScript Gurukul, Pune",
  ];
  return (
    <div>
      {locations.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          className="flex gap-4 border-2 p-3 border-gray-100 active:border-black  rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <FaMapMarkerAlt />
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
