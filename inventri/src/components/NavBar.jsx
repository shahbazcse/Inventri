import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShopware } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBoxes } from "react-icons/bs";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";

function NavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return path === window.location.pathname;
  };

  return (
    <div className="flex flex-col gap-4 items-center w-[15%] bg-[#FFFFFF] drop-shadow-md">
      <div className="flex items-center justify-center gap-2 mt-6 mb-12 text-3xl font-bold">
        <FaShopware />
        <div>Inventri</div>
      </div>
      <div
        className={`${
          isActive("/") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[16vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/")}
      >
        <LuLayoutDashboard className="h-7 w-7" />
        <div className="font-bold">Dashboard</div>
      </div>
      <div
        className={`${
          isActive("/inventory") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[16vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/inventory")}
      >
        <BsBoxes className="h-7 w-7" />
        <div className="font-bold">Inventory</div>
      </div>
      <div
        className={`${
          isActive("/sales") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[16vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/sales")}
      >
        <PiShoppingCartSimpleLight className="h-7 w-7" />
        <div className="font-bold">Sales</div>
      </div>
      <div
        className={`${
          isActive("/analytics") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[16vh] flex items-center gap-4 text-center px-4 py-3 rounded-xl cursor-pointer drop-shadow-md`}
        onClick={() => navigate("/analytics")}
      >
        <VscGraph className="h-7 w-7" />
        <div className="font-bold">Analytics</div>
      </div>
    </div>
  );
}

export default NavBar;
