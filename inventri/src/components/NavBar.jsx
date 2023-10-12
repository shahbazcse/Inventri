import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return path === window.location.pathname;
  };

  return (
    <div className="flex flex-col gap-4 mt-12 items-center w-[15%] bg-[#FFFFFF]">
      <div
        className={`${
          isActive("/") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[16vh] text-center px-4 py-3 rounded-xl cursor-pointer font-bold`}
        onClick={() => navigate("/")}
      >
        Dashboard
      </div>
      <div
        className={`${
          isActive("/inventory") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[16vh] text-center px-4 py-3 rounded-xl cursor-pointer font-bold`}
        onClick={() => navigate("/inventory")}
      >
        Inventory
      </div>
      <div
        className={`${
          isActive("/sales") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[16vh] text-center px-4 py-3 rounded-xl cursor-pointer font-bold`}
        onClick={() => navigate("/sales")}
      >
        Sales
      </div>
      <div
        className={`${
          isActive("/analytics") ? "bg-blue-300" : "hover:bg-blue-200"
        } w-[16vh] text-center px-4 py-3 rounded-xl cursor-pointer font-bold`}
        onClick={() => navigate("/analytics")}
      >
        Analytics
      </div>
    </div>
  );
}

export default NavBar;
