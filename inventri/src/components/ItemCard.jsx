import React from "react";

function ItemCard() {
  return (
    <div className="flex items-center">
      <div className="w-[1.5rem]">#1</div>
      <div className="flex h-[12vh] w-[60%] ml-6 items-center border border-slate-300 bg-[#FFFFFF] hover:bg-slate-100">
        <div className="flex justify-center items-center border-r w-[20%] h-full">
          <p>Name</p>
        </div>
        <div className="flex justify-center items-center border-r w-[20%] h-full">
          <p>Quantity</p>
        </div>
        <div className="flex justify-center items-center border-r w-[20%] h-full">
          <p>Price</p>
        </div>
        <div className="flex justify-center items-center border-r w-[20%] h-full">
          <p>Category</p>
        </div>
        <div className="flex justify-center items-center w-[20%] h-full">
          <p>Date Added</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
