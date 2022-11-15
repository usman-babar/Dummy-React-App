import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import BMS from "./components/BMS";
import AllBanks from "./components/AllBanks.js";
import AddBank from "./components/AddBank.js";
import Navbar from "./components/Navbar.js";
import EditBranch from "./components/EditBranch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BMS />} />
          <Route path="/add" element={<AddBank />} />
          <Route path="/all" element={<AllBanks />} />
          <Route path="/edit/:id" element={<EditBranch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
