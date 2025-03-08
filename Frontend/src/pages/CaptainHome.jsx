import React, { useContext, useEffect, useRef, useState } from "react";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridePopupPanelref = useRef(null);
  const confirmRidePopupPanelref = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "captain", userId: captain._id });
  }, [captain]);

  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupPanelref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopupPanel]);

  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopupPanelref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopupPanel]);

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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://i1.wp.com/www.xamboy.com/wp-content/uploads/2019/05/Screenshot-2019-05-17-18.35.31.png?fit=838%2C640&ssl=1"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full  pt-12"
      >
        <RidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
      <div
        ref={confirmRidePopupPanelref}
        className="fixed w-full h-screen z-10 bottom-0 bg-white px-3 py-8 translate-y-full  pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
