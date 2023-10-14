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
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-6 mx-12 my-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="mx-[12vh] text-lg">
          Welcome to your dashboard, where you can get a quick snapshot of your
          business's vital statistics. Currently, your total stock on hand is
          displayed, giving you an immediate view of available inventory. Total
          sales to date provide an overview of your business activity, while
          total revenue generated tells you the financial impact. For a quick
          reference on the latest activity, we've included the date of your most
          recent sale, ensuring you're always up-to-date. With these key metrics
          at your fingertips, you're empowered to make informed decisions, plan
          for the future, and keep your business on track.
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
