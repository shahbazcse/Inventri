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

  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const sales = useSelector((state) => state.sales);

  const handleAddSale = (sale) => {
    dispatch(addSale(sale));
  };

  const filteredSales = sales.filter((sale) => {
    if (dateRange.startDate === "" && dateRange.endDate === "") return true;
    const saleDate = new Date(sale.createdAt).toLocaleDateString();

    return (
      saleDate >= new Date(dateRange.startDate).toLocaleDateString() &&
      saleDate <= new Date(dateRange.endDate).toLocaleDateString()
    );
  });

  useEffect(() => {
    dispatch(fetchInventory());
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Sales</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="mx-[12vh]">
          Experience seamless sales management with our advanced system. Our
          sales module not only keeps track of all your sales but also allows
          you to add new sales with ease. It enables you to filter sales based
          on a specified date range, providing you with a clear view of your
          sales history. Whether you're analyzing recent performance or checking
          sales trends, our system equips you with the tools to make data-driven
          decisions.
        </div>
        <div className="flex flex-col mb-4 px-4 w-full">
          <div className="flex items-center gap-6 ml-[3rem] mb-4 text-center mx-auto">
            <div
              onClick={() => setOpenModal(true)}
              className="flex items-center justify-center gap-1 bg-[#64CCC5] hover:bg-[#3eb8af] text-center mx-auto pl-3 pr-1 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold"
            >
              Add Sale
              <BiPlus className="h-6 w-6" />
            </div>
            <div className="flex items-center justify-center gap-1 bg-[#FFFFFF] text-center mx-auto p-2 rounded-xl drop-shadow-md font-bold">
              <input
                onChange={(e) =>
                  setDateRange({ ...dateRange, startDate: e.target.value })
                }
                className="border-2 rounded-md p-1"
                type="date"
              />
              <span className="mx-1">to</span>
              <input
                onChange={(e) =>
                  setDateRange({ ...dateRange, endDate: e.target.value })
                }
                className="border-2 rounded-md p-1"
                type="date"
              />
              <div
                onClick={() => setDateRange({ startDate: "", endDate: "" })}
                className="border border-slate-300 px-1 ml-2 bg-slate-200 hover:bg-slate-300 cursor-pointer drop-shadow-sm rounded-md"
              >
                Clear
              </div>
            </div>
          </div>
          <SalesHeader />
          {filteredSales.map((sale, index) => (
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
