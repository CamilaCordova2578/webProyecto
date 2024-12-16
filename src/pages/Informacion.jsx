import Header from "../components/Header";
import Footer from "../components/Footer";
import TuImagen from "../assets/img/imagen21.jpg"
import "../css/informacion.css"
function Informacion()
{
    return(
       <>
        <Header className="header-two" title="Información" btnClass="hide"></Header>
        <div className="info-contenedor my-5">
      <div className="imagen-fila">
        <img src={TuImagen} alt="Descripción de la imagen" />
        <div><a href='https://www.google.com/maps/place/Museo+Nacional+de+Historia+Natural/@-16.538995,-68.070768,17z/data=!4m6!3m5!1s0x915f2147ee756ed3:0x2b3aabea70a675ed!8m2!3d-16.5389946!4d-68.0707676!16s%2Fg%2F1pt_0rjsr?hl=es&entry=ttu' target='_blank'>Ver Mapa</a></div>
      </div>
      <div className="info-fila">
        <div className="info-item">
          <p><i className="fa-solid fa-map-pin"></i> Dirección: Calle 26 de Cota Cota (Ovidio Suárez). La Paz, Bolivia.</p>
        </div>
        <div className="info-item">
          <p><i class="fa-solid fa-phone"></i> Teléfono: +591 -2- 2795364</p>
        </div>
        <div className="info-item">
          <p><i class="fa-solid fa-envelope"></i> Email: info@mnhn.gob.bo</p>
        </div>
      </div>
    </div>
        <Footer></Footer>
        </>

    );

}

export default Informacion;