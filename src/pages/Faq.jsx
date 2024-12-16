import Header from "../components/Header";
import Footer from "../components/Footer";
import Acordeon from "../components/Acordeon"
function Faqs()
{
    return(
       <>
        <Header className="header-two" title="Preguntas Frecuentes" btnClass="hide"></Header>
        <Acordeon/>
        <Footer></Footer>
        </>

    );

}

export default Faqs;