import "../css/galeria.css"
import React from "react"

const GaleriaComp = ({GaImg1, GaImg2, GaImg3, GaImg4, GaImg5, GaImg6, GaImg7, GaImg8, GaImg9, GaImg10, GaImg11, GaImg12}) =>
{
  return (
     <>
      <div className="galeria-contenedor my-5">
        <div className="galeria-item"><img src={GaImg1} alt="Descripción" /></div>
        <div className="galeria-item"><img src={GaImg2} alt="Descripción" /></div>
        <div className="galeria-item"><img src={GaImg3} alt="Descripción" /></div>
  
        <div className="galeria-item"><img src={GaImg4} alt="Descripción" /></div>
        <div className="galeria-item"><img src={GaImg5} alt="Descripción" /></div>
        <div className="galeria-item"><img src={GaImg6} alt="Descripción" /></div>
  
        <div className="galeria-item"><img src={GaImg7} alt="Descripción" /></div>
        <div className="galeria-item"><img src={GaImg8} alt="Descripción" /></div>
        <div className="galeria-item"><img src={GaImg9}alt="Descripción" /></div>
  
        <div className="galeria-item"><img src={GaImg10} alt="Descripción" /></div>
        <div className="galeria-item"><img src={GaImg11} alt="Descripción" /></div>
        <div className="galeria-item"><img src={GaImg12} alt="Descripción" /></div>
        
      </div>
     
     </>
  );
}
  
  export default GaleriaComp;
  