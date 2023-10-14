import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBoxes } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

function NavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return path === window.location.pathname;
  };

  return (
    <div className="flex flex-col gap-4 items-center w-[15%] bg-[#FFFFFF] drop-shadow-md font-[raleway] text-xl">
      <div className="flex items-center justify-center gap-2 mt-6 mb-12 text-3xl font-bold">
        <img className="h-9 w-9" src={logo} alt="" />
        <div className="tracking-wider">Inventri</div>
      </div>
      <div
        className={`${
          isActive("/") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/")}
      >
        <LuLayoutDashboard className="h-7 w-7" />
        <div className="font-bold">Dashboard</div>
      </div>
      <div
        className={`${
          isActive("/inventory") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/inventory")}
      >
        <BsBoxes className="h-7 w-7" />
        <div className="font-bold">Inventory</div>
      </div>
      <div
        className={`${
          isActive("/sales") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/sales")}
      >
        <PiShoppingCartSimpleLight className="h-7 w-7" />
        <div className="font-bold">Sales</div>
      </div>
      <div
        className={`${
          isActive("/analytics") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[18vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/analytics")}
      >
        <VscGraph className="h-7 w-7" />
        <div className="font-bold">Analytics</div>
      </div>
      <div className="flex items-center justify-center gap-8 fixed bottom-0 px-7 my-12">
        <a
          href="https://github.com/shahbazcse/Inventri"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-7 w-7 cursor-pointer text-blue-300 hover:text-black" />
        </a>
        <a
          href="https://twitter.com/shahbaz_cse"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter className="h-7 w-7 cursor-pointer text-blue-300 hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/shahbazcse/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-7 w-7 cursor-pointer text-blue-300 hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
