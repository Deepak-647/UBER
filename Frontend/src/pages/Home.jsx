import React, { useContext, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideFill } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import Riding from "./Riding";

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
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [findTripBtn, setFindTripBtn] = useState(false);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const [ride, setRide] = useState(null);
  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id });
  }, [user]);

  socket.on("ride-confirmed", (ride) => {
    setVehicleFound(false);
    setVehiclePanel(false);
    setWaitingForDriver(true);
    setRide(ride);
  });

  socket.on("ride-started", (ride) => {
    setWaitingForDriver(false);
    navigate("/riding",{state: {ride}});
  });

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPickupSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching pickup suggestions:", error);
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: { input: e.target.value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching destination suggestions:", error);
    }
  };

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

  const findTrip = async () => {
    setVehiclePanel(true);
    setPanelOpen(false);
    setFindTripBtn(false);

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: { pickup, destination },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setFare(response.data);
  };

  async function createRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination,
        vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);
  }

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
                setFindTripBtn(false);
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
              onClick={() => {
                setPanelOpen(true);
                setFindTripBtn(true);
                setActiveField("pickup");
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
                setFindTripBtn(true);
                setActiveField("destination");
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          {findTripBtn ? (
            <button
              onClick={findTrip}
              className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full"
            >
              Find Trip
            </button>
          ) : null}
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full pt-12"
      >
        <VehiclePanel
          selectVehicle={setVehicleType}
          fare={fare}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full pt-12"
      >
        <ConfirmRide
          pickup={pickup}
          destination={destination}
          createRide={createRide}
          fare={fare}
          vehicleType={vehicleType}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 translate-y-full pt-12"
      >
        <LookingForDriver
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={waitingForDriverref}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver ride={ride} waitingForDriver={waitingForDriver} />
      </div>
      
    </div>
  );
};

export default Home;
