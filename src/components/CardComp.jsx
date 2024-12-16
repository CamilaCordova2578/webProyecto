import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';
import BiImg1 from "../assets/img/imagen47.jpg";
import BiImg2 from "../assets/img/imagen18.jpg";
import BiImg3 from "../assets/img/imagen19.jpg";
import BiImg4 from "../assets/img/imagen41.png";
import BiImg5 from "../assets/img/imagen42.png";
import BiImg6 from "../assets/img/imagen43.png";
import BiImg7 from "../assets/img/imagen44.png";
import BiImg8 from "../assets/img/imagen45.png";
import BiImg9 from "../assets/img/imagen46.png";

import "../css/biblioteca.css"
import { Container, Row, Col } from 'reactstrap';

function CardComp()
{
  return(
     <>
     <Container className='my-5'>
      <Row style={{ marginBottom: '100px' }}>
        <Col md-4>

        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg1}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Mamíferos del Paque Nacional Madidi
        </CardTitle>
        <CardText>
        Edición: Teresa Tarifa
        </CardText>

        <a href="https://www.dropbox.com/scl/fo/du6ih83p827fvjjuqc6se/h?dl=0&e=1&preview=Mam%C3%ADferos+del+Paque+Nacional+Madidi+-+2001.pdf&rlkey=w15309ue6x8kwnhsvpnr0p1rz" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link 
        </a>

      </CardBody>
    </Card>
        
        </Col>
        <Col md-4>
        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg2}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Libro Rojo de los Invertebrados de Bolivia</CardTitle>
        <CardText>
        Edición: Ministerio de Medio Ambiente
        </CardText>

        <a href="https://www.dropbox.com/s/mle69wnp0sm97n0/Historia%20Natural%20del%20Valle%20de%20La%20Paz.pdf" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link
        </a>

      </CardBody>
    </Card>

        </Col>
        
        <Col md-4>
        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg3}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Historia Natural del Valle de La Paz</CardTitle>
        <CardText>
        Edición: M. Isabel Moya, Rosa Isela Meneses, Jaime Sarmiento.
        </CardText>

        <a href="https://www.dropbox.com/s/vyyra7tf5yldppa/Libro%20Rojo%20de%20los%20Invertebrados%20de%20Bolivia.pdf" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link
        </a>
        
        </CardBody>
      </Card>
        </Col>

      </Row>
      </Container>




      <Container className='my-5'>   
      <Row style={{ marginBottom: '100px' }}>
        <Col md-4>
        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg4}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Madidi y su Biodiversidad</CardTitle>
        <CardText>
        Edicion: ANMI Madidi - 2012
        </CardText>

        <a href="https://www.dropbox.com/scl/fo/du6ih83p827fvjjuqc6se/h?rlkey=w15309ue6x8kwnhsvpnr0p1rz&e=1&dl=0" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link 
        </a>

      </CardBody>
    </Card>
        </Col>

        <Col md-4>
        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg5}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Diversidad de la Flora en la serrania de Azanaques</CardTitle>
        <CardText>
        Edición: Monica Aeballos Montes
        </CardText>

        <a href="https://www.dropbox.com/scl/fi/4xsbt8jlkf15is1u2boga/DIVERSIDAD-DE-LA-FLORA-EN-LA-SERRAN-A-DE-AZANAQUES.pdf?rlkey=4nytos6b5dtd5rjwhhk37sn3a&e=1" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link 
        </a>

      </CardBody>
    </Card>

        </Col>

        <Col md-4>
        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg6}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Historia natural de Sara Ana</CardTitle>
        <CardText>
        Edición: Maria Ripa Landoja, Kazuya Naoki
        </CardText>

        <a href="https://www.dropbox.com/scl/fi/zm87i77teijuia67v0372/Historia-Natural-de-Sara-Ana-2021.pdf?rlkey=e6yxe1fgtv2vw9rsffv06fnpl&e=1" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link 
        </a>

      </CardBody>
    </Card>

     </Col>

      </Row>
     </Container>




     <Container className='my-5'>   
      <Row>
        <Col md-4>
        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg7}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Libro Rojo de la Fauna Silvestre</CardTitle>
        <CardText>
        Edición: Ministerio de Medio Ambiente y Agua
        </CardText>

        <a href="https://www.dropbox.com/scl/fi/3pgf59ludohndxlevbyys/Libro-Rojo-de-la-Fauna-Silvestre-de-Vertebrados-de-Bolivia.pdf?rlkey=p8mpqpy2c1ac617oezokdy02o&e=1" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link 
        </a>

      </CardBody>
    </Card>
        </Col>

        <Col md-4>
        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg8}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Libro Rojo de la Flora amenazada de Bolivia</CardTitle>
        <CardText>
        Edición: M. Isabel Moya
        </CardText>

        <a href="https://www.dropbox.com/scl/fi/78fezi8luuezpz4undt1a/Libro-Rojo-Flora-Amenazada-de-Bolivia-Volumen-I-Zona-Andina.pdf?rlkey=ejpr577ccbcjkfw4nnysnrn70&e=1" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link 
        </a>

      </CardBody>
    </Card>

        </Col>

        <Col md-4>
        <Card style={{ width: '18rem' }}>
    <img
         alt="Sample"
         src= {BiImg9}
          className="card-img"
      />
      <CardBody>
        <CardTitle>Libro Rojo de Plantas Amenazadas de las Tierras Bajas de Bolivia</CardTitle>
        <CardText>
        Edición: MMAyA
        </CardText>

        <a href="https://www.dropbox.com/scl/fi/o477r6mxyiura9ixult2q/Libro-Rojo_EspeciesAmenazadasBoliviaTierrasBajas_21.pdf?rlkey=ple98yi1m8ku3vtggteehipyf&e=1" 
           className="btn btn-custom" 
           target="_blank" 
           rel="noopener noreferrer">
           Link 
        </a>

      </CardBody>
    </Card>

        </Col>

      </Row>
     </Container>
     </>
  );
}

export default CardComp;