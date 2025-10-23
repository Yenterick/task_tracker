import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import TaskMenu from "./pages/TaskMenu/TaskMenu.jsx";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const ID = localStorage.getItem("ID");

  if (!token || !ID) {
    localStorage.setItem("token", "");
    localStorage.setItem("ID", "");
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  useEffect(() => {
    localStorage.setItem("token", "");
    localStorage.setItem("ID", "");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/taskMenu" element={<ProtectedRoute><TaskMenu/></ProtectedRoute>}/>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
