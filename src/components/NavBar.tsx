import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import "style/navbar.scss"


export default class NavBar extends React.Component{

  
    public render():React.ReactNode{
        return(
            <>
             <Navbar>
                <Container>
                    <div className='myself fw-500'>
                        <Link to="/">
                        <img src="img/me.jpg" alt="Moi le plus beau" />Baptiste ANORGA</Link> 
                    </div>
                    <div className="menu ms-auto me-5">
                        <ul>
                            <li>
                                <NavLink to="/about" >About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/expertise">Expertise</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                   
                </Container>
             </Navbar>
          </>
        )
    }
}