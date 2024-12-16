import Header from "../components/Header";
import Footer from "../components/Footer";
import ImagBo from "../assets/img/imagen20.jpg";
import BotanicaComp from "../components/BotanicaComp";
import "../css/botanica.css"
function Botanica()
{
    return(
        <>
    <Header className="header-two" title="Botánica" btnClass="hide"></Header>
    <BotanicaComp
      texto={`
        <h2>Unidad de Botánica</h2>
        <p>La Unidad de Botánica enmarca sus actividades en la investigación científica y difusión sobre la diversidad de la flora en las ecoregiones del Altiplano, Valles, Yungas, Amazonía y Chaco del territorio boliviano para la conservación, gestión y movilización del conocimiento a través de:</p>
        <ul>
          <li>Desarrollo y mantenimiento de colecciones científicas, mediante la recolección de muestras botánicas, manejo de herbario: Prensado, secado, organización, identificación, elaboración de fichas técnicas, base de datos y montaje que constituye un registro permanente de la flora y vegetación boliviana en convenio con el Herbario Nacional de Bolivia (LPB).</li>
          <li>Difusión del conocimiento de la flora y vegetación generado a través de investigaciones realizadas en formato de: libros, capítulo de libro, artículos científicos, notas técnicas y científicas, guías, folletos, infografías, post. En presentaciones orales, seminarios, congresos, capacitaciones, cursos, entre otros, destinado a diferentes sectores de la población boliviana.</li>
          <li>Gestión en el proceso de investigación, cooperación interinstitucional a solicitud de entidades públicas y privadas referidas a biodiversidad.</li>
          <li>Investigación en el área de taxonomía, de plantas vasculares mediante la descripción y registro de nuevos taxones. Caracterización de flora y vegetación en diferentes formaciones vegetales. Etnobotánica, en la documentación de los conocimientos tradicionales y locales de las plantas útiles: Medicinales, comestibles, construcción, entre otros. La biología y ecología de especies de flora y de comunidades vegetales como base para su conservación, uso y aprovechamiento sustentable del patrimonio vegetal del país.</li>
        </ul>
      `}
      imagensrc={ImagBo}
  />

    <Footer/>
        </>

    );
}

export default Botanica;
 