
import "./Navbar.css";
import React from "react"

const NavBar = () => {

    return (
    <>
    
        <nav className="nav-wrapper">
            <div className="nav-content">
                <nav className="log">
                    <img className="logo" src="/assts/imagem/cj 2.0.png" alt="" />
                </nav>
                <ul>
                    <li>
                        <a className="menu-item" href="#home">home</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#skills">Habilidades</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#work-experience">Experiencias de Trabalho</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#me-contact">Meu Contato</a>
                    </li>
                    <button className="contact-btn" >
                         Fale comigo 
                    </button>
                </ul>
            </div>
        </nav>
    </>
    );
};

export default NavBar;
