 import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navv from "../Navv";
import Grid from "./Grid";
// import ReactDOM from "react-dom/client";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

function Routtte() {

               
  <BrowserRouter>
    <Routes>
      <Route index path="./Grid" element={<Grid />}>
        {"Grid "}
      </Route>
      <Route path="../Navv" element={<Navv />} />
    </Routes>
  </BrowserRouter>;
  
}
export default Routtte;
