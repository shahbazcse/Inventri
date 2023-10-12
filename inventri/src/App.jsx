import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen">
        <NavBar />
        <div className="bg-blue-100 w-[85%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
