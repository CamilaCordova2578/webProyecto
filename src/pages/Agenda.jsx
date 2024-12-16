import Header from "../components/Header";
import Footer from "../components/Footer";
import CarruselCard from "../components/CarruselCard";
import { Container, Row, Col } from "reactstrap";
import imagen1 from '../assets/img/imagen49.jpg';
import imagen2 from '../assets/img/imagen50.jpg';
import imagen3 from '../assets/img/imagen51.jpg';
import imagen4 from '../assets/img/imagen58.jpg';
import imagen5 from '../assets/img/imagen59.jpg';
import imagen6 from '../assets/img/imagen60.jpg';
import imagen7 from '../assets/img/imagen61.jpg';
import imagen8 from '../assets/img/imagen62.jpg';
import imagen9 from '../assets/img/imagen63.jpg';
 function Agenda(){   
    const data1 = [
        {
          title: 'Jugamos Hacemos Ciencia',
          text: 'Bolivia Indaga te invita a participar en actividades divertidas en contacto con la naturaleza, utilizando la metodología del Ciclo de Indagación',
          buttonText: 'Mas informacion',
          image: imagen1 ,
          enlaceBoton: "https://www.facebook.com/photo/?fbid=1091057446142689&set=-ven-a-disfrutar-de-tus-vacaciones-con-el-taller-jugando-hacemos-ciencia-bolivia",
          key: 1,
        },
        {
          title: 'Taller de Xilografia',
          text: 'Aprende a realizar tu propia estampa xilografica desde lo básico, inspirado en la biodiversidad local en un recorrido por el museo de historia natural.',
          buttonText: 'Mas informacion',
          image: imagen2,
          enlaceBoton: "https://www.facebook.com/photo/?fbid=1091057446142689&set=-ven-a-disfrutar-de-tus-vacaciones-con-el-taller-jugando-hacemos-ciencia-bolivia",
          key: 2,
        },
        {
            title: '¡Manos a la Siembra!',
            text: '¿Qué aprenderás? qué es la semilla, tipos, formas de dispersión, la germinación, sustratos, agua capilar, cuidados de las plantas.',
            buttonText: 'Mas informacion',
            image: imagen3,
            enlaceBoton: "https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/469261069_1090950906153343_7065570674030329099_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oQms9aUZx6YQ7kNvgHwI38I&_nc_zt=23&_nc_ht=scontent.flpb2-1.fna&_nc_gid=AqSmyOo-Frqu2qwHTI1Xq7J&oh=00_AYBVzuId9VNOyNhaX8U0E1j7dXs6gS8ga2l8QB-qudME2A&oe=6764187F",
            key: 3,
          },
          {
            title: 'La magia de los polinizadores',
            text: 'Conocerás qué flores polinizan, jugarás con tu propio murcicóptero y te llevarás un cuadernillo para colorear. ',
            buttonText: 'Mas informacion',
            image: imagen4,
            enlaceBoton: "https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/463368940_1055470126368088_3902004635268816990_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VOrM7uqxBOQQ7kNvgFI3nPq&_nc_zt=23&_nc_ht=scontent.flpb2-2.fna&_nc_gid=A1d5Xud4bQ52FV58JQ9KFXd&oh=00_AYAjjGMbBvni2uZf70Em7XXYf66aQKPQM5JKxBTlBt68CA&oe=67640DE7",
            key: 4,
          },
          {
            title: 'MurciMochiliando por Suramérica',
            text: 'Junto con el apoyo del Programa Para la Conservación de Murciélagos de Colombia (PDMCo) Únete al curso gratuito',
            buttonText: 'Mas informacion',
            image: imagen5,
            enlaceBoton: "https://www.facebook.com/photo/?fbid=1091057446142689&set=-ven-a-disfrutar-de-tus-vacaciones-con-el-taller-jugando-hacemos-ciencia-bolivia",
            key: 5,
          }
      ];
      
      const data2 = [
        {
          title: 'Presentacion de Libro: "Fosiles Marinos del Devonico de Sucre"',
          text: 'Documenta el Periodo Devónico (419-359 Ma.)',
          buttonText: 'Mas informacion',
          image: imagen6,
          enlaceBoton: "https://www.facebook.com/MNHNbol/posts/pfbid02pbDW1br1vBS7VpL2UQAz1z5AZpHaBEh5n1L1CQJjxJFVVCPRUDKATTWwTwLXgXuQl",
          key: 1,
        },
        {
            title: 'Noche de Iberoamericana de Museos',
            text: '¡No te pierdas la II versión de la Noche Iberoamericana de Museos. Este viernes 8 de noviembre! ',
            buttonText: 'Mas informacion',
            image: imagen7,
            enlaceBoton: "https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/465041259_1066464451935322_7084622222766264400_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=r4kVqrzhsGsQ7kNvgEA1eL0&_nc_zt=23&_nc_ht=scontent.flpb2-1.fna&_nc_gid=AfIMGDdP1yhWcEn7yYf1Jia&oh=00_AYBfFxbr2Dt6MiwlKxuDw3y2rmQr3KU5hfH_p0E5pOh8DA&oe=67641566",
            key: 2,
          },
          {
            title: 'MurciFest-2024',
            text: 'Este mes, el Museo Nacional de Historia Natural de Bolivia te invita a sumergirte en el MurciFest',
            buttonText: 'Mas informacion',
            image: imagen8,
            enlaceBoton: "https://www.facebook.com/MNHNbol/posts/pfbid02pbDW1br1vBS7VpL2UQAz1z5AZpHaBEh5n1L1CQJjxJFVVCPRUDKATTWwTwLXgXuQl",
            key: 3,
          },
          {
            title: ' Programa Nacional y de Apoyo a la Producción Apícola',
            text: 'El SENASAG - MDRyD participó en el Programa Nacional',
            buttonText: 'Mas informacion',
            image: imagen9,
            enlaceBoton: "https://www.facebook.com/MNHNbol/posts/pfbid02pbDW1br1vBS7VpL2UQAz1z5AZpHaBEh5n1L1CQJjxJFVVCPRUDKATTWwTwLXgXuQl",
            key: 4,
          }
        
      ];


    return(
      <>
      <Header className="header-two" title="Agenda" btnClass="hide"></Header>
       <Container>
        <Row>
            <Col md-6>
                <section className="eventos-destacados">
            <h2
              style={{
                textAlign: "center",
                backgroundColor: "rgba(165, 97, 42, 0.24)",
                marginBottom: "20px",
              }}
            >
              ¿Por qué asistir a nuestros eventos?
            </h2>
            <div
              style={{
                padding: "20px",
  
              }}
            >
        <p>
          <strong>1. Promover la Cultura y la Historia Natural:</strong>  
          Nuestros eventos destacan la riqueza cultural y la biodiversidad de Bolivia. Al participar, te conectarás con nuestro entorno y patrimonio, aprendiendo sobre la importancia de preservarlos para futuras generaciones.
        </p>
        <p>
          <strong>2. Fomentar la Conciencia Ambiental:</strong>  
          Los eventos buscan sensibilizar al público sobre los desafíos ambientales y la conservación de los ecosistemas, creando conciencia sobre nuestra responsabilidad como cuidadores de la naturaleza.
        </p>
        <p>
          <strong>3. Generar Espacios de Aprendizaje Interactivo:</strong>  
          Actividades prácticas como talleres, charlas y exposiciones permiten aprender de manera participativa y divertida, haciendo que el conocimiento sea accesible y emocionante para todas las edades.
        </p>
        <p>
          <strong>4. Fortalecer la Comunidad:</strong>  
          Al colaborar con emprendedores e instituciones, promovemos un ambiente inclusivo donde las personas pueden conectarse, compartir ideas y trabajar juntas por un objetivo común.
        </p>
        <p>
          <strong>5. Accesibilidad y Gratitud:</strong>  
          Muchos de nuestros eventos son de ingreso gratuito, asegurando que cualquier persona pueda disfrutar del conocimiento y la cultura sin barreras económicas.
        </p>
        <p>
          <strong>6. Experiencias Únicas para Todas las Edades:</strong>  
          Desde talleres creativos hasta exposiciones interactivas, cada evento está diseñado para brindar una experiencia memorable para niños, jóvenes y adultos.
        </p>
      </div>
    </section>
            </Col>
            <Col md-6>
            <h2 style={{textAlign: "center", color: " rgb(153, 100, 51)" }}>Eventos Disponibles</h2>
            <CarruselCard items={data2} />
            </Col>
        </Row>
       </Container>


       <Container>
        <Row>
          <Col md-6>
          <h2 style={{textAlign: "center", color: " rgb(153, 100, 51)" }}>Talleres Disponibles</h2>
            <CarruselCard items={data1} />
          </Col>
          <Col md-6>
          <section className="razones-talleres">
          <h2
          style={{
            textAlign: "center",
            backgroundColor: "rgba(165, 97, 42, 0.24)",
            marginBottom: "20px",
          }}
          >¿Por qué ofrecemos Talleres?</h2>
        <ul>
          <li>
            <strong>Fomentamos el aprendizaje interactivo:</strong>
            Nuestros talleres permiten que los participantes exploren de manera práctica temas relacionados con las ciencias, las artes y el patrimonio cultural, convirtiendo el conocimiento en una experiencia tangible.
          </li>
          <li>
            <strong>Incentivamos la creatividad y el desarrollo de habilidades:</strong>
            A través de manualidades, experimentos y otras actividades, buscamos potenciar la creatividad, las habilidades artísticas y la capacidad de resolver problemas de nuestros visitantes.
          </li>
          <li>
            <strong>Promovemos la conciencia ambiental:</strong>
            Muchos de nuestros talleres están orientados a fomentar la sostenibilidad y a fortalecer el vínculo de las personas con la naturaleza y el entorno que nos rodea.
          </li>
          <li>
            <strong>Ofrecemos espacios inclusivos para todos:</strong>
            Diseñados para todas las edades y públicos, nuestros talleres son accesibles para niños, jóvenes, adultos y familias, asegurando una experiencia enriquecedora para cada visitante.
          </li>
          <li>
            <strong>Fortalecemos el tejido comunitario:</strong>
            Creemos en la importancia de reunir a personas en espacios colaborativos que fomenten el intercambio cultural, la integración y la creación de lazos significativos.
          </li>
          <li>
            <strong>Complementamos nuestras exposiciones:</strong>
            Nuestros talleres son una extensión de las exhibiciones, permitiendo a los participantes profundizar en los temas expuestos y vivenciarlos desde una perspectiva diferente.
          </li>
          <li>
            <strong>Generamos espacios de reflexión:</strong>
            Estas actividades invitan a reflexionar sobre temas históricos, científicos y culturales, destacando su relevancia en la vida contemporánea.
          </li>
        </ul>
        <p>
          En el museo, estamos comprometidos con ofrecer experiencias que transformen cada visita en un momento enriquecedor e inolvidable.
        </p>
    </section>

          </Col>
        </Row>
       </Container>
      

    <Footer/>
      </>
    );
}

export default Agenda;
