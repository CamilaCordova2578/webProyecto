import "../css/botanica.css"
import React from "react"

const BotanicaComp = ({texto, imagensrc}) => {
    return (
        <>
            <div className="botanica-contenedor">
                <div className="texto-columna my-0">
                    <div dangerouslySetInnerHTML={{ __html: texto }} />
                </div>
                <div className="imagen-columna my-5">
                    <img src={imagensrc} alt="Descripción de la imagen" />
                </div>
            </div>
        </>
    );
}

export default BotanicaComp;
