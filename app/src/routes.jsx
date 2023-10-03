import { BrowserRouter, Routes, Route }  from "react-router-dom";
import Dados from "./pages/comentario-dados";
import Home from "./pages/Home/Home";
import Login from "./components/Register/index"

function AppRoutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/dados" element={<Dados/>} ></Route>
            <Route path= "/login" element={<Login/>} ></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes