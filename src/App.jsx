import './App.css'
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Visitas from "./pages/Visitas.jsx";
import NavBar from "./components/NavBar.jsx";
import Galeria from "./pages/Galeria.jsx";
import Videos from "./pages/Videos.jsx";
import  Biblioteca from "./pages/Biblioteca.jsx";
import Botanica  from "./pages/Botanica.jsx";
import Informacion from "./pages/Informacion.jsx";
import Faqs from "./pages/Faq.jsx";
import Mensaje from "./pages/Mensaje.jsx";
import Agenda from "./pages/Agenda.jsx";

function App() {
  return (
    <>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/visitas" element={<Visitas />} />
        <Route path="/galeria" element={<Galeria/>}></Route>
        <Route path="/videos" element={<Videos/>}></Route>
        <Route path="/biblioteca" element={<Biblioteca/>}></Route>
        <Route path="/botanica" element={<Botanica/>}></Route>
        <Route path="/informacion" element={<Informacion/>}></Route>
        <Route path="/agenda" element={<Agenda/>}></Route>
        <Route path="/faq" element={<Faqs/>}></Route>
        <Route path="/mensaje" element={<Mensaje/>}></Route>
      </Routes>
    </>
  )
}

export default App
