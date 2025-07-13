// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { StorageListener } from "./components/StorageListener";

// публичный
import Sign_in from "./components/Sign_in";

// лейаут
import User from "./components/User";

// защищённые страницы
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Settings from "./components/Settings";
import AllScripts from "./components/AllScripts";
import Scenarios from "./components/Scenarios";
import Users from "./components/Users";
import VmSettings from "./components/VMSettings";
import ProfilePage from './components/ProfilePage';
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = ({ theme, toggleTheme }) => (
  <Router>
    <StorageListener />
    <Routes>
      {/* публичка */}
      <Route path="/auth" element={<Sign_in />} />

      {/* защищённая область */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/User/*"
          element={<User theme={theme} toggleTheme={toggleTheme} />}
        >
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create" element={<Create />} />
          <Route path="scripts" element={<AllScripts />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="scenarios" element={<Scenarios />} />
          <Route path="vm-settings/:vmId" element={<VmSettings />} />
          <Route path="me" element={<ProfilePage />} />
        </Route>
      </Route>

      {/* всё остальное на /auth */}
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  </Router>
);

export default App;