import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TareasPage from "./pages/TareasPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/tasks" element={<PrivateRoute component={TareasPage} />} /> {/* Ruta protegida */}
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
