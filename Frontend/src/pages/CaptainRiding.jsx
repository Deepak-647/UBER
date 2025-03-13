import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import LiveTracking from "../components/LiveTracking";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  const location = useLocation();
  const rideData = location.state?.ride;

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt=""
      />
      <Link
        to="/captainhome"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <MdLogout className="text-lg font-medium " />
      </Link>

      <div className="h-4/5">
        <LiveTracking />
      </div>
      <div
        onClick={() => {
          setFinishRidePanel(true);
        }}
        className="h-1/5 p-6 relative  flex items-center  justify-between bg-yellow-400"
      >
        <h5 onClick={() => {}} className="absolute top-2 right-[45%]">
          <IoIosArrowUp className="text-3xl" />
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="px-10  bg-green-600 text-white font-semibold p-2 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full  pt-12"
      >
        <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
