import Footer from '../components/Footer.jsx';
import GaleriaComp from '../components/GaleriaComp.jsx';
import Header from '../components/Header.jsx';
import Img1 from "../assets/img/imagen1.jpg"
import Img2 from "../assets/img/imagen6.jpg"
import Img3 from "../assets/img/imagen7.jpg"
import Img4 from "../assets/img/imagen8.jpg"
import Img5 from "../assets/img/imagen9.jpg"
import Img6 from "../assets/img/imagen10.jpg"
import Img7 from "../assets/img/imagen11.jpg"
import Img8 from "../assets/img/imagen12.jpg"
import Img9 from "../assets/img/imagen13.jpg"
import Img10 from "../assets/img/imagen14.jpg"
import Img11 from "../assets/img/imagen15.jpg"
import Img12 from "../assets/img/imagen16.jpg"

function Galeria ()
{
    return(
        <>
        <Header className="header-two" title="Galeria" btnClass="hide"></Header>
         <GaleriaComp
         GaImg1={Img1}
         GaImg2={Img2}
         GaImg3={Img3}
         GaImg4={Img4}
         GaImg5={Img5}
         GaImg6={Img6}
         GaImg7={Img7}
         GaImg8={Img8}
         GaImg9={Img9}
         GaImg10={Img10}
         GaImg11={Img11}
         GaImg12={Img12}
         />
        <Footer></Footer>
        </>
    )
}

export default Galeria;