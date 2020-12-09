import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faAddressCard , faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons'

import './head.scss';

import {
    Link
  } from "react-router-dom";

const Head = () => {
    return (
        <header>
            <div className="container__menu">
                <div className="logotype">
                    <Link to="/"><img src="./foto.png" alt="" className="logo__image" /></Link>
                    <Link to="/"><img src="./perfil2.png" alt="" className="logo__image2" /></Link>
                    <div className="p1">Verónica Juárez</div>
                </div>
                <div className="menus">
                    <div className="container__links">
                    
                        <Link to='/projects' className="enlaces"><FontAwesomeIcon icon={faGithubSquare} size="1x" className="iconmenu" />Projects</Link>
                        
                        <Link to='/about' className="enlaces"><FontAwesomeIcon icon={faAddressCard} size="1x" className="iconmenu" /> About</Link>
                        <Link to='/contact' className="enlaces"><FontAwesomeIcon icon={faEnvelope} size="1x" className="iconmenu" />Contact</Link>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"><FontAwesomeIcon icon={faBars} size="1x" className="icono" /></button>
                        <ul className="dropdown-menu" role="menu">
                            <li role="presentation" className="menu__option"><Link to='/projects'  className="enlaces opcion" href="#"><FontAwesomeIcon icon={faGithubSquare} size="1x" className="iconmenu" />Projects</Link></li>
                            <li className="divider"></li>
                            <li><Link to='/about' className="enlaces" href="#"><FontAwesomeIcon icon={faAddressCard} size="1x" className="iconmenu" /> About</Link></li>
                            <li className="divider"></li>
                            <li><Link to='/contact' className="enlaces" href="#"><FontAwesomeIcon icon={faEnvelope} size="1x" className="iconmenu" />Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )


}
export default Head;