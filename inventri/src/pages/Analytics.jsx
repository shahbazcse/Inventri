import React, { useState } from "react";
import InventoryReport from "../components/Analytics/InventoryReport";
import SalesReport from "../components/Analytics/SalesReport";
import { AiOutlineReload } from "react-icons/ai";

function Analytics() {
  const [inventoryReport, setInventoryReport] = useState(false);
  const [salesReport, setSalesReport] = useState(false);

  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          beatae temporibus voluptates similique assumenda, qui non odio impedit
          consequatur quibusdam.
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex">
            <div
              onClick={() => {
                setSalesReport(false);
                setInventoryReport(true);
              }}
              className={`flex items-center justify-center gap-1 bg-blue-300 ${
                inventoryReport
                  ? "border-2 border-blue-500"
                  : "hover:bg-blue-400"
              } ml-[3rem] mb-4 text-center mx-auto px-4 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold`}
            >
              Generate Inventory Report
              <AiOutlineReload className="h-6 w-6 ml-1" />
            </div>
            <div
              onClick={() => {
                setInventoryReport(false);
                setSalesReport(true);
              }}
              className={`flex items-center justify-center gap-1 bg-blue-300 ${
                salesReport ? "border-2 border-blue-500" : "hover:bg-blue-400"
              } ml-[3rem] mb-4 text-center mx-auto px-4 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold`}
            >
              Generate Sales Report
              <AiOutlineReload className="h-6 w-6 ml-1" />
            </div>
          </div>
          <div className="mt-4">
            {inventoryReport && <InventoryReport />}
            {salesReport && <SalesReport />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
