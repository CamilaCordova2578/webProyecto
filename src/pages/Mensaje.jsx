import "../css/mensaje.css"
import Formulario from "../components/Formulario"
import Header from "../components/Header";
import Footer from "../components/Footer";
function Mensaje ()
{  return(
   <>
    <Header className="header-two" title="Mensaje" btnClass="hide"></Header>
   <Formulario/>
    <Footer></Footer>
   </>
  );
}
export default Mensaje;