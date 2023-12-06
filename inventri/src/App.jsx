import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import NonDesktopPage from "./pages/NonDesktopPage";

function App() {
  return (
    <>
    <div className="block xl:hidden h-screen">
        <NonDesktopPage />
      </div>
    <div className="hidden xl:block App">
      <div className="flex h-screen font-[roboto]">
        <NavBar />
        <div className="bg-blue-100 tracking-wide w-[85%] overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
