import React from "react";

function ItemsHeader() {
  return (
    <div className="flex items-center top-0 sticky drop-shadow-lg font-bold">
      <div className="w-[1.5rem] invisible">#1</div>
      <div className="flex items-center justify-center">
        <div className="flex h-[6vh] ml-6 items-center bg-blue-300 rounded-t-md">
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>Name</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>Quantity</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>Price</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>Category</p>
          </div>
          <div className="flex justify-center items-center w-[20.2vh] h-full">
            <p>Date Added</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsHeader;
