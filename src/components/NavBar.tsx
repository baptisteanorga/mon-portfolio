import React from 'react';
import {Container, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import "style/navbar.scss"

interface Props {
}

type State = {
    menuActive:boolean;
}


export default class NavBar extends React.Component<Props,State>{

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:Props){
        super(props)

        this.state = {
            menuActive:false 
        }

        this.toggleMenu = this.toggleMenu.bind(this);
       
    }

    public toggleMenu(): void {
        this.setState({ menuActive: !this.state.menuActive });
    };

    public render():React.ReactNode{
        return(
            <>
             <Navbar>
                <Container>
                    <div className='myself fw-500'>
                        <Link to="/">
                        <img src="img/me.jpg" alt="Moi le plus beau" /></Link> 
                        <Link to="/" className='text'>Baptiste ANORGA</Link>
                    </div>
                    <div className="menu ms-auto me-5">
                        <i className="fa fas fa-bars" onClick={this.toggleMenu}></i>
                        <ul className={this.state.menuActive ? 'active' : ''}>
                            <li>
                                <NavLink onClick={this.toggleMenu} to="/about" >About</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={this.toggleMenu}  to="/expertise">Expertise</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={this.toggleMenu} to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={this.toggleMenu} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>                  
                </Container>
             </Navbar>
          </>
        )
    }
}

function setMenuActive(arg0: boolean) {
    throw new Error('Function not implemented.');
}
