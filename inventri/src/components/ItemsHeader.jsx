import React from "react";

function ItemsHeader() {
  return (
    <div className="flex items-center top-0 sticky drop-shadow-md bg-blur font-bold">
      <div className="w-[1.5rem]"></div>
      <div className="flex h-[6vh] w-[60%] ml-6 items-center bg-blue-300  rounded-t-md">
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

export default ItemsHeader;
