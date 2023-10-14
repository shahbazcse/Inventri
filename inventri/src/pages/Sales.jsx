import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import SaleCard from "../components/Sales/SaleCard";
import SalesHeader from "../components/Sales/SalesHeader";
import Modal from "../components/Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addSale } from "../services/SalesService";
import { fetchInventory } from "../services/InventoryService";
import { fetchSales } from "../services/SalesService";

function Sales() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const sales = useSelector((state) => state.sales);

  const handleAddSale = (sale) => {
    dispatch(addSale(sale));
  };

  useEffect(() => {
    dispatch(fetchInventory());
    dispatch(fetchSales());
  }, []);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Sales</h1>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          beatae temporibus voluptates similique assumenda, qui non odio impedit
          consequatur quibusdam.
        </div>
        <div className="flex flex-col px-4 w-full">
          <div
            onClick={() => setOpenModal(true)}
            className="flex items-center justify-center gap-1 bg-[#64CCC5] hover:bg-[#3eb8af] ml-[3rem] mb-4 text-center mx-auto pl-3 pr-1 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold"
          >
            Add Sale
            <BiPlus className="h-6 w-6" />
          </div>
          <SalesHeader />
          {sales.map((sale, index) => (
            <SaleCard key={index} serial={index + 1} sale={sale} />
          ))}
        </div>
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          action={handleAddSale}
          formType={"Sale"}
        />
      )}
    </div>
  );
}

export default Sales;
