import Header from "../components/Header";
import Footer from "../components/Footer";
import MisionImg from "../assets/img/imagen2.jpg";
import VisionImg from "../assets/img/imagen3.jpg";

import "../css/inicio.css"
function Inicio ()
{
    return(
        <>
        <Header className="header-one" title="Museo Nacional de Historia Natural" btnClass="show"></Header>
        <div className="inicio-cont">

            <div className="mision">
                <div className="mision-text">
                    <h1>Misión</h1>
                    <p>Somos una institución pública descentralizada de investigación, preservación y custodia del patrimonio natural y cultural del Estado Plurinacional de Bolivia y de educación ambiental y paleontológica, que coadyuva a la sustentabilidad 
                        de los componentes, zonas y sistemas de vida de la Madre Tierra a través del desarrollo y manejo de colecciones científicas sobre fauna, flora, fósiles y la información asociada; la generación y movilización del conocimiento científico; la documentación, recuperación y 
                        preservación de los saberes locales y los conocimientos ancestrales; y la educación ambiental y paleontológica. Para ello se asienta sobre los principios de integralidad, diálogo de saberes, justicia social y participación plural, promoviendo en particular un mayor acceso y participación de niñas 
                        y mujeres en ciencia para la reducción de las desigualdades persistentes.</p>
                </div>
                <div className="mision-img">
                    <img alt="mision" src={MisionImg}/>
                </div>
            </div>

            <div className="vision">
                <div className="vision-img">
                    <img alt="vision" src={VisionImg}/>
                </div>
                <div className="mision-text">
                    <h1>Visión</h1>
                    <p>Al 2030 consolidarse como una institución referente a nivel nacional e internacional en materia de sustentabilidad de los componentes, zonas y sistemas de vida de la Madre Tierra con capacidades fortalecidas de manejo de colecciones científicas sobre fauna, flora y fósiles, investigación científica, 
                        diálogo se saberes, generación y movilización del conocimiento y educación ambiental y paleontológica.</p>
                </div>

            </div>

        </div>
        <Footer/>
        </>
    )
}

export default Inicio;