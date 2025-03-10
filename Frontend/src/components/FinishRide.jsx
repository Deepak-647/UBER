import React from "react";
import { BsCashStack } from "react-icons/bs";
import { FaLocationArrow, FaLocationDot } from "react-icons/fa6";
import { RiArrowDownWideFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="absolute top-2 right-3"
      >
        <RiArrowDownWideFill className="text-3xl" />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
      Finish this Ride
      </h3>
      <div className="flex items-center justify-between border  border-yellow-400 p-4 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-xl text-font-medium">{props.ride?.user.fullname.firstname}</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationDot className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                {props.ride?.pickup}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <FaLocationArrow className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600 ">
                {props.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <BsCashStack className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">₹ {props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600 ">Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <Link
            to="/captainhome"
            className="w-full flex items-center justify-center mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg"
          >
            Finish Ride
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
