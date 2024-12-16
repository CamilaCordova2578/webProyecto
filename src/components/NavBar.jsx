import "../css/navbar.css"
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

class NavBar extends Component 
{
    state = {clicked:false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render()
    {
        return(

            <nav className="NavBarItems">
                <h1 className="navbar-logo">Museo</h1>
                
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return(
                        <li key={index}>
                        <Link className={item.className} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                        </li>  
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavBar;