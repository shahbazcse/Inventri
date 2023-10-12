import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Link to="/">Dashboard</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/analytics">Analytics</Link>
    </div>
  );
}

export default NavBar;
