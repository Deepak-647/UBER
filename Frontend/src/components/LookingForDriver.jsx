import React from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";

const LookingForDriver = (props) => {
  return (
    <div>
      {/* <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="absolute top-2 right-3"
      >
        <RiArrowDownWideFill className="text-3xl" />
      </h5> */}
      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
      <div className="flex flex-col gap-2 justify-between items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationDot className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                {props.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationArrow className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
              {props.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <BsCashStack className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">₹ {props.fare[props.vehicleType]}</h3>
              <p className="text-sm -mt-1 text-gray-600 ">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
