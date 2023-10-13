import React from "react";
import { BiPlus } from "react-icons/bi";
import SaleCard from "../components/Sales/SaleCard";
import SalesHeader from "../components/Sales/SalesHeader";

function Sales() {
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
          <div className="flex items-center justify-center gap-1 bg-[#64CCC5] hover:bg-[#3eb8af] ml-[3rem] mb-4 text-center mx-auto pl-3 pr-1 py-3 rounded-xl drop-shadow-md cursor-pointer font-bold">
            Add Sale
            <BiPlus className="h-6 w-6" />
          </div>
          <SalesHeader />
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
          <SaleCard />
        </div>
      </div>
    </div>
  );
}

export default Sales;
