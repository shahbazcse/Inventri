import React, { useState } from "react";
import Modal from "../Modals/Modal";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { deleteItem, updateItem } from "../../services/InventoryService";
import { useDispatch } from "react-redux";

function ItemCard({ serial, item }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const [tools, setTools] = useState(false);

  const { _id, name, quantity, price, category, createdAt } = item;

  const getDate = () => {
    const date = new Date(createdAt);
    const DD = date.getDate();
    const MM = date.getMonth() + 1;
    const YYYY = date.getFullYear();
    return `${DD}/${MM}/${YYYY}`;
  };

  const handleItemDelete = () => {
    dispatch(deleteItem(_id));
  };

  const handleItemEdit = (item) => {
    dispatch(updateItem(item));
  };

  return (
    <div className="flex items-center">
      <div className="w-[1.5rem]">#{serial}</div>
      <div
        onMouseEnter={() => setTools(true)}
        onMouseLeave={() => setTools(false)}
        className="flex items-center justify-center"
      >
        <div
          className={`flex h-[12vh] ml-6 items-center border border-slate-300 bg-[#FFFFFF] ${
            tools && "hover:bg-slate-100"
          }`}
        >
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p className="font-bold">{name}</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>{quantity} units</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>${price}</p>
          </div>
          <div className="flex justify-center items-center border-r w-[20vh] h-full">
            <p>{category}</p>
          </div>
          <div className="flex justify-center items-center w-[20vh] h-full">
            <p>{getDate()}</p>
          </div>
        </div>
        <div
          className={`${
            tools ? "visible" : "invisible"
          } flex flex-col gap-3 ml-3`}
        >
          <div
            onClick={() => setOpenModal(true)}
            className=" p-1 hover:bg-slate-300 hover:text-blue-700 rounded-md cursor-pointer"
          >
            <FiEdit className="h-6 w-6" />
          </div>
          <div
            onClick={handleItemDelete}
            className=" p-1 hover:bg-slate-300 hover:text-red-500 rounded-md cursor-pointer"
          >
            <MdDelete className="h-6 w-6" />
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          action={handleItemEdit}
          formType={"EditForm"}
          item={item}
        />
      )}
    </div>
  );
}

export default ItemCard;
