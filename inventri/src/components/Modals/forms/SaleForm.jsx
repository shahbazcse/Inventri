import React, { useState } from "react";
import { useSelector } from "react-redux";

function SaleForm({ action, setOpenModal, btnStyle }) {
  const inventory = useSelector((state) => state.inventory);

  const [data, setData] = useState({
    item: "",
    name: "",
    quantity: 0,
    price: 0,
    profit: 0,
  });

  const formValidation = () => {
    if (
      (data.item === "") |
      (data.name === "") |
      (data.quantity === "") |
      (data.price === "") |
      (data.profit === "")
    ) {
      return true;
    }
    return false;
  };

  const currentItem = inventory.find(({ _id }) => _id === data?.item);
  const profitPerUnit = currentItem?.price - currentItem?.costPrice;

  return (
    <>
      <div className="flex flex-col justify-end items-center gap-4">
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Item</div>
          <select
            value={data.category}
            onChange={(e) =>
              setData({
                ...data,
                item: e.target.value,
                name: inventory.find(({ _id }) => _id === e.target.value)?.name,
              })
            }
            className="border-2 p-1 w-[20vh] rounded-md"
          >
            <option value="">Select Item</option>
            {inventory.map(({ _id, name }, index) => (
              <option key={index} value={_id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center text-lg">
          <div className="w-[16vh]">Quantity</div>
          <input
            value={data.quantity}
            onChange={(e) =>
              setData({
                ...data,
                quantity: e.target.value,
                price: currentItem.price * e.target.value,
                profit: profitPerUnit * e.target.value,
              })
            }
            type="number"
            className="border-2 p-1 w-[20vh] rounded-md text-md"
          />
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
            Please fill all input fields to Add a Sale
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SaleForm;
