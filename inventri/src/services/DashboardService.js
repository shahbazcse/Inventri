const getTotalStocks = (inventory) => {
  return inventory.reduce((total, { quantity }) => total + quantity, 0);
};

const getTotalSales = (sales) => {
  return sales.reduce((total, { quantity }) => total + quantity, 0);
};

const getTotalRevenue = (sales) => {
  return sales.reduce((total, { profit }) => total + profit, 0);
};

const getLastSaleDate = (dates) => {
  return new Date(Math.max(...dates.map((e) => new Date(e)))).toDateString();
};

export { getTotalStocks, getTotalSales, getTotalRevenue, getLastSaleDate };
