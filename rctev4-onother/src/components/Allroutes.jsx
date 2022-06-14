import { Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import CompanyPage from "./CompanyPage";
import EmployeeD from "./EmployeeD";
import EmployeePage from "./EmployeePage";

 const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/employee" element={<EmployeePage />} />
      <Route path="/employee/:id" element={<EmployeeD />} />
    </Routes>
  );
};
export default Allroutes