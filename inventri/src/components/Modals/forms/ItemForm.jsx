import React, { useState } from "react";

function ItemForm({ action, setOpenModal, btnStyle }) {
  const [data, setData] = useState({
    name: "",
    quantity: 0,
    price: 0,
    costPrice: 0,
    category: "",
  });

  const formValidation = () => {
    if (
      (data.name === "") |
      (data.quantity === "") |
      (data.price === "") |
      (data.costPrice === "") |
      (data.category === "")
    ) {
      return true;
    }
    return false;
  };
  
  return (
    <>
      <div className="flex flex-col justify-end items-center gap-4">
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Name</div>
          <input
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            type="text"
            className="border-2 p-1 w-[20vh] rounded-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Quantity</div>
          <input
            value={data.quantity}
            onChange={(e) => setData({ ...data, quantity: e.target.value })}
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Price</div>
          <input
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Cost Price</div>
          <input
            value={data.costPrice}
            onChange={(e) => setData({ ...data, costPrice: e.target.value })}
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Category</div>
          <select
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
            className="border-2 p-1 w-[20vh] rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Furniture">Furniture</option>
            <option value="Electronics">Electronics</option>
            <option value="Appliances">Appliances</option>
            <option value="Accessories">Accessories</option>
            <option value="Tools">Tools</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          disabled={formValidation()}
          onClick={() => {
            action(data);
            setOpenModal(false);
          }}
          className={`${
            formValidation() ? "bg-slate-300" : btnStyle
          } mx-auto px-12 py-2 mb-4 rounded-full text-lg`}
        >
          Add
        </button>
        {formValidation() ? (
          <p className="text-[12px] text-red-500">
            Please fill all input fields to Add an Item
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ItemForm;
