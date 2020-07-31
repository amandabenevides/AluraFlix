import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
import ButtonLink from '../ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
        <a href="/">
        <img className="Logo" src={Logo} alt="logo" /> 
        </a>
        
        <ButtonLink className="ButtonLink" href="/">

        </ButtonLink>
         
        </nav>
    );
}

export default Menu;

