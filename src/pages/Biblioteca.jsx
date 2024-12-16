import CardComp from "../components/CardComp"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Biblioteca()
{
    return(
        <>
        <Header className="header-two" title="Biblioteca" btnClass="hide"></Header>
        <CardComp/>
        <Footer/>        
        </>
    )
}
export default Biblioteca