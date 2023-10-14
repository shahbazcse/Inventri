import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetricCard from "../components/MetricCard";
import img1 from "../assets/01.svg";
import img2 from "../assets/02.svg";
import img3 from "../assets/03.svg";
import img4 from "../assets/04.svg";
import { fetchInventory } from "../services/InventoryService";
import { fetchSales } from "../services/SalesService";
import {
  getTotalStocks,
  getTotalSales,
  getTotalRevenue,
} from "../services/DashboardService";

function Dashboard() {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);
  const sales = useSelector((state) => state.sales);
  const lastSale = useSelector((state) => state.lastSale);
  
  useEffect(() => {
    dispatch(fetchInventory());
    dispatch(fetchSales());
  }, []);
  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          eius voluptatum atque fuga hic et nihil, pariatur sed eos provident,
          illo rem amet aperiam impedit temporibus doloribus neque aliquid. At
          laudantium in officiis natus nesciunt quo provident exercitationem.
          Maxime similique magni alias accusamus omnis eos est ducimus suscipit
          autem ratione!
        </div>
        <div className="flex flex-wrap items-center justify-center my-12 mx-48 gap-12">
          <MetricCard
            label={"Total Stocks"}
            type={"stocks"}
            value={getTotalStocks(inventory)}
            bannerImg={img1}
          />
          <MetricCard
            label={"Total Sales"}
            type={"sales"}
            value={getTotalSales(sales)}
            bannerImg={img2}
          />
          <MetricCard
            label={"Total Revenue"}
            type={"revenue"}
            value={getTotalRevenue(sales)}
            bannerImg={img3}
          />
          <MetricCard
            type={"date"}
            label={"Last Sale"}
            value={lastSale}
            bannerImg={img4}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
