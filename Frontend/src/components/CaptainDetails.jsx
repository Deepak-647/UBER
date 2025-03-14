import React ,{useContext}from "react";
import { IoMdTime } from "react-icons/io";
import { LuNotebook } from "react-icons/lu";
import { MdSpeed } from "react-icons/md";
import { CaptainDataContext } from "../context/CaptainContext";
 
const CaptainDetails = () => {
  const {captain} =useContext(CaptainDataContext)
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">{captain.fullname.firstname +" "+captain.fullname.lastname}</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold ">₹295.20</h4>
          <p className="text-sm  text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="flex flex-col items-center">
          <IoMdTime className="text-3xl mb-2  font-thin " />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="flex flex-col items-center">
          <MdSpeed className="text-3xl mb-2  font-thin " />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="flex flex-col items-center">
          <LuNotebook className="text-3xl mb-2  font-thin " />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
