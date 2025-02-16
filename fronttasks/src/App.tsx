import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TareasPage from "./pages/TareasPage";

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/tasks" element={<TareasPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
