import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dados from "./pages/comentario-dados";
import Home from "./pages/Home/Home";
import Login from "./components/Login/index";
import Register from "./pages/register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dados" element={<Dados />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
