import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModuleClient from "./client/ModuleClient";
import ModuleEmployee from "./employee/ModuleEmployee";
import ModuleAdmin from "./admin/ModuleAdmin";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModuleLogin from "./authorization/ModuleLogin";
import { User } from "./objects/description";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/client/:id" element={<ModuleClient/>}/>
          <Route path="/employee" element={<ModuleEmployee employee={new User()}/>}/>
          <Route path="/admin" element={<ModuleAdmin admin={new User()}/>}/>
          <Route path="/login" element={<ModuleLogin/>}/>
          <Route path="/" element={<ModuleLogin/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
