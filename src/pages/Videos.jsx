import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import "../css/videos.css"
function Videos ()
{
    return(
        <>
        <Header className="header-two" title="Videos" btnClass="hide"></Header>
        <div className="video-cont">
        <div className="video-item">
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/-rEclZsf0M4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>

        <div className="texto-item">
            <h2>Restos fósiles del Elefante Andino</h2>
            <p>
            En este video se presenta el importante descubrimiento de restos fósiles del Elefante Andino en San Andrés de Machaca, Bolivia, realizado en 2021. Los fósiles, descubiertos por las familias Ramírez, han sido objeto de un exhaustivo proceso de identificación y restauración por parte de los 
            paleontólogos del museo. Se detalla las técnicas utilizadas en la limpieza y conservación de los fósiles, resaltando su significado para la paleontología y la historia natural. La pieza subraya la relevancia de estos hallazgos en el ámbito científico, potencialmente enriqueciendo futuras investigaciones y colecciones museísticas
            </p>

        </div>

        <div className="texto-item">
            <h2>Fauna amazónica</h2>
            <p>
            El video destaca la importancia del Amazonas como el bosque tropical más grande y diverso del mundo, enfocándose en su variada fauna y flora. Se menciona la distribución de esta biodiversidad en varios departamentos de Bolivia, incluyendo Pando, Beni, Santa Cruz, La Paz y Cochabamba. 
            Entre las especies destacadas se encuentran el lobito del río, la tortuga acuática Galápagos, el bufeo o delfín de agua dulce, el lagarto, el mono silbador, el mono ardilla, el venado, el tapir y el cóndor amazónico. 
            </p>
        </div>

        <div className="video-item">
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/FhfKezGUpyA" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>

        <div className="video-item">
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/ljRRpuHuATs"
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>

        <div className="texto-item">
            <h2>Yacarerani Boliviensis</h2>
            
            <p>
                El video ofrece una visión detallada sobre el Yacarerani boliviensis, una especie de cocodrilo prehistórico. Se aborda su evolución, anatomía y hábitos alimenticios, destacando su existencia hace entre 94 y 85 millones de años. 
                Se cubre el descubrimiento y análisis de sus fósiles en Bolivia, proporcionando una perspectiva única sobre estos fascinantes reptiles del pasado y su significado en el estudio de la paleontología.
            </p>
        </div>
    </div>
        <Footer></Footer>
        </>
    )
}

export default Videos;