import React from "react";
import ItemCard from "../components/ItemCard";
import ItemsHeader from "../components/ItemsHeader";

function Inventory() {
  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Inventory</h1>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          beatae temporibus voluptates similique assumenda, qui non odio impedit
          consequatur quibusdam.
        </div>
        <div className="flex flex-col p-4 w-full gap-8">
          <ol className="flex flex-col">
            <ItemsHeader />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
