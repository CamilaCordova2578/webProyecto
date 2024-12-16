import "../css/header.css";
import HeaderImg from "../assets/img/imagen1.jpg";

function Header (props)
{
    return(
        <>
            <div className={props.className}>
                <img alt="HeaderImg" src={HeaderImg}/>

                <div className="header-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href="https://www.youtube.com/watch?v=s1kWG4k0fKg" target="_blank" className={props.btnClass}>Visitanos</a>
                </div>

            </div>
        </>
    );
}

export default Header;