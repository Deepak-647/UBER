import React from "react";
import { FaUser } from "react-icons/fa";
import { RiArrowDownWideFill } from "react-icons/ri";

const VehiclePanel = (props) => {

  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="absolute top-2 right-3"
      >
        <RiArrowDownWideFill className="text-3xl" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('car')
        }}
        className="flex w-full mb-2 border active:border-black rounded-xl p-3 items-center   justify-between"
      >
        <img
          className="h-12 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="flex font-medium text-base">
            UberGo
            <span className="flex items-center mx-2">
              <FaUser className="mr-1" />4
            </span>
          </h4>
          <h2 className="font-medium text-sm">2 mins away</h2>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('moto')
        }}
        className="flex w-full mb-2 border active:border-black rounded-xl p-3 items-center   justify-between"
      >
        <img
          className="h-12 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" ml-2 w-1/2">
          <h4 className="flex font-medium text-base">
            Moto
            <span className="flex items-center mx-2">
              <FaUser className="mr-1" />1
            </span>
          </h4>
          <h2 className="font-medium text-sm">3 mins away</h2>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Bike rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('auto')
        }}
        className="flex w-full mb-2 border active:border-black rounded-xl p-3 items-center   justify-between"
      >
        <img
          className="h-12 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-2  w-1/2">
          <h4 className="flex font-medium text-base">
            Uber Auto
            <span className="flex items-center mx-2">
              <FaUser className="mr-1" />3
            </span>
          </h4>
          <h2 className="font-medium text-sm">5 mins away</h2>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auro rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
