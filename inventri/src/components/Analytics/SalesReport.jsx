import React from "react";

function SalesReport() {
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
            {/* Map through the inventory data and display it */}
            <tr>
              <td className="px-4 py-2 border-r border-b">#</td>
              <td className="px-4 py-2 border-r border-b">Name</td>
              <td className="px-4 py-2 border-r border-b">Quantity</td>
              <td className="px-4 py-2 border-b">Revenue</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r border-b">#</td>
              <td className="px-4 py-2 border-r border-b">Name</td>
              <td className="px-4 py-2 border-r border-b">Quantity</td>
              <td className="px-4 py-2 border-b">Revenue</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r border-b">#</td>
              <td className="px-4 py-2 border-r border-b">Name</td>
              <td className="px-4 py-2 border-r border-b">Quantity</td>
              <td className="px-4 py-2 border-b">Revenue</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-r border-b">#</td>
              <td className="px-4 py-2 border-r border-b">Name</td>
              <td className="px-4 py-2 border-r border-b">Quantity</td>
              <td className="px-4 py-2 border-b">Revenue</td>
            </tr>
          </tbody>
        </table>
        <table className="bg-blue-300 rounded-lg">
          <tbody>
            <tr>
              <td className="px-6 py-3  border font-bold">Total Sales</td>
              <td className="px-6 py-3  border font-bold">100</td>
            </tr>
            <tr>
              <td className="px-6 py-3  border font-bold">Total Profit</td>
              <td className="px-6 py-3  border font-bold">100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesReport;
