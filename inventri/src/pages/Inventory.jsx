import React from "react";
import ItemCard from "../components/Inventory/ItemCard";
import ItemsHeader from "../components/Inventory/ItemsHeader";
import { BiPlus } from "react-icons/bi";
import { useSelector } from "react-redux";

function Inventory() {
  const inventory = useSelector((state) => state.inventory);
  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Inventory</h1>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          beatae temporibus voluptates similique assumenda, qui non odio impedit
          consequatur quibusdam.
        </div>
        <div className="flex flex-col px-4 w-full">
          <div className="flex items-center justify-center gap-1 bg-blue-300 hover:bg-blue-400 ml-[3rem] mb-4 text-center mx-auto pl-3 pr-1 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold">
            Add Item
            <BiPlus className="h-6 w-6" />
          </div>
          <ItemsHeader />
          {inventory.map((item, index) => (
            <ItemCard key={index} serial={index + 1} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inventory;
