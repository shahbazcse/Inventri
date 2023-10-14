import React from "react";
import { useSelector } from "react-redux";
import { getTotalStocks } from "../../services/DashboardService";

const InventoryReport = () => {
  const inventory = useSelector((state) => state.inventory);
  const totalExpense = inventory.reduce(
    (total, { costPrice }) => total + costPrice,
    0
  );
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl font-bold">Inventory Report</h1>
      <div className="flex justify-center items-center gap-14">
        <table className="bg-blue-300 rounded-md w-[56vh] text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 border-r border-b">#</th>
              <th className="px-4 py-2 border-r border-b">Name</th>
              <th className="px-4 py-2 border-r border-b">Quantity</th>
              <th className="px-4 py-2 border-r border-b">
                Cost Price <span className="text-slate-700">(Per Unit)</span>
              </th>
              <th className="px-4 py-2 border-b">Category</th>
            </tr>
          </thead>
          <tbody className="bg-[#FFFFFF]">
            {inventory.map(({ name, quantity, costPrice, category }, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-r border-b">#{index + 1}</td>
                <td className="px-4 py-2 border-r border-b font-bold">
                  {name}
                </td>
                <td className="px-4 py-2 border-r border-b">
                  {quantity} units
                </td>
                <td className="px-4 py-2 border-r border-b">${costPrice}</td>
                <td className="px-4 py-2 border-b">{category}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="bg-blue-300 rounded-lg">
          <tbody>
            <tr>
              <td className="px-6 py-3  border font-bold">
                Total Stock Quantity
              </td>
              <td className="px-6 py-3  border font-bold">
                {getTotalStocks(inventory)} units
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3  border font-bold">
                Total Inventory Expense
              </td>
              <td className="px-6 py-3  border font-bold">${totalExpense}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryReport;
