import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };
  return (
    <div>

      {suggestions.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            handleSuggestionClick(location);
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
