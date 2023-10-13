import React from "react";
import { useSelector } from "react-redux";
import {
  getTotalSales,
  getTotalRevenue,
} from "../../services/DashboardService";

function SalesReport() {
  const sales = useSelector((state) => state.sales);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl font-bold">Sales Report</h1>
      <div className="flex justify-center items-center gap-14">
        <table className="bg-blue-300 rounded-md w-[56vh] text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-r border-b">#</th>
              <th className="px-4 py-2 border-r border-b">Name</th>
              <th className="px-4 py-2 border-r border-b">Quantity</th>
              <th className="px-4 py-2 border-b">Revenue</th>
            </tr>
          </thead>
          <tbody className="bg-[#FFFFFF]">
            {sales.map(({ name, quantity, profit }, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-r border-b">#{index + 1}</td>
                <td className="px-4 py-2 border-r border-b font-bold">
                  {name}
                </td>
                <td className="px-4 py-2 border-r border-b">
                  {quantity} units
                </td>
                <td className="px-4 py-2 border-b">${profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="bg-blue-300 rounded-lg">
          <tbody>
            <tr>
              <td className="px-6 py-3  border font-bold">Total Sales</td>
              <td className="px-6 py-3  border font-bold">
                {getTotalSales(sales)} units
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3  border font-bold">Total Profit</td>
              <td className="px-6 py-3  border font-bold">
                ${getTotalRevenue(sales)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesReport;
