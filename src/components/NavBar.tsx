import React from 'react';
import { Link } from 'react-router-dom';
import "style/navbar.scss"


export default class NavBar extends React.Component{
    public render():React.ReactNode{
        return(
            <>
                <div className="navbar">
                    <nav>
                        <div className='myself fw-500'>
                            <Link to="/">
                            <img src="img/logo192.png" alt="Moi le plus beau" />Baptiste ANORGA</Link>
                        </div>
                        <div className="menu ms-auto me-5">
                            <ul>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/expertise">Expertise</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
          </>
        )
    }
}