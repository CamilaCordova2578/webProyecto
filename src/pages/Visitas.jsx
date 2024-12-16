import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carrusel from "../components/Carrusel.jsx";
import { Container, Row, Col } from 'reactstrap';
import "../css/visitas.css";

function Visitas() {
  return (
    <>
      <Header className="header-two" title="Visitas" btnClass="hide"></Header>
      <div className="container-flex">
        <div className="text-area">
          <h2>Boletos</h2>
          <ul>
            <li>Mayores (desde los 12 años): 5 Bs.</li>
            <li>Menores (desde los 5 años): 3 Bs.</li>
            <li>Adultos mayores y personas con discapacidad: 2 Bs.</li>
            <li>Extranjeros (sin diferencia de edad): 12 Bs.</li>
          </ul>

          <h2>Delegaciones</h2>
          <p>
            Si quieres visitar el MNHN con una delegación, programa tu visita
            llamando al 2795364 o por redes sociales, indicando:
          </p>

          <ol>
            <li>El nombre de la institución.</li>
            <li>Cantidad de visitantes.</li>
            <li>Día y horario deseado.</li>
            <li>Datos y teléfono de la persona de contacto.</li>
          </ol>
        </div>
      </div>
      <Container className="my-5">
        <Row>
            <Col md-12>
              <Carrusel/>
            </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Visitas;
