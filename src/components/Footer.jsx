import "../css/footer.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () =>{
    return(
        <div className="footer">

            <div className="top">

                <div className="redes">
                    <div><h2>Redes Sociales</h2></div>
                    <div>
                        <a href="https://www.facebook.com/MNHNbol/" target="_blank">
                           <i className="fa-brands fa-facebook"></i>
                        </a>

                        <a href="https://www.instagram.com/mnhn_bolivia/" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a href="https://www.youtube.com/@mnhnbolivia" target="_blank">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <p> <i class="fa-solid fa-circle-exclamation"></i>
                    Este proyecto es un ejercicio de desarrollo web creado con fines EDUCATIVOS y de PRÁCTICA. No está afiliado, autorizado, mantenido, patrocinado ni de ninguna manera oficialmente conectado con "Museo Nacional de Historia Natural" en Bolivia.
                    </p> 
                    <p><i class="fa-solid fa-user"></i>
                        Nombre: Camila Ayelen Cordova Vasquez <br></br> Paralelo: "A"
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
 