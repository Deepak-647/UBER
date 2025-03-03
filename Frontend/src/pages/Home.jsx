import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";

import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [PanelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelref = useRef(null);
  const confirmRidePanelref = useRef(null);
  const vehicleFoundref = useRef(null);
  const waitingForDriverref = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (PanelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
      });
    }
  }, [PanelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverref.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverref.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end  h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          {PanelOpen ? (
            <h5
              onClick={() => {
                setPanelOpen(false);
              }}
              className="absolute top-2 right-3"
            >
              <RiArrowDownWideFill className="text-3xl" />
            </h5>
          ) : null}

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full pt-12"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full pt-12"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
