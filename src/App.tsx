import { BrowserRouter, Route, Routes } from "react-router";
import {Login} from "../pages/Login";
import {AdminDashboard} from "../pages/Admin_Dashboard";
import {Profile} from "../pages/Profile";

import "./App.css"; 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
