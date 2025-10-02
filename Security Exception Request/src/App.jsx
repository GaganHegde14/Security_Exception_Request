import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import SecurityForms3 from "./components/SecurityForms3.jsx";
import SecurityForms4 from "./components/SecurityForms4.jsx";
import SecurityForms5 from "./components/SecurityForms5.jsx";
import SecurityForms6 from "./components/SecurityForms6.jsx";
import SecurityForms2 from "./components/ApprovalPath.jsx";
import SecurityForms from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/employeesubmit1" element={<SecurityForms />} />
          <Route path="/employeesubmit2" element={<SecurityForms2 />} />
          <Route path="/partheadapproval" element={<SecurityForms3 />} />
          <Route path="/pmorrmapproval" element={<SecurityForms4 />} />
          <Route path="/groupheadapproval" element={<SecurityForms5 />} />
          <Route path="/hrbpapproval" element={<SecurityForms6 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
