import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dados from "./pages/comentario-dados";
import Home from "./pages/Home/Home";
import Login from "./components/Login/index";
import Register from "./pages/register";
import Ods1 from "./pages/ods1";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dados" element={<Dados />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/ods1" element={<Ods1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
