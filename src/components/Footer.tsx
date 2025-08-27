import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import "style/footer.scss"

interface Props {
}

type State = {
}


export default class Footer extends React.Component<Props,State>{

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:Props){
        super(props)

        this.state = {
        }

       
    }


    public render():React.ReactNode{
        return(
            <>
                <footer className="footer">
                    <Container>
                        <Row>
                        <Col md={4}>
                            <h5>About Me</h5>
                            <p>I'm a fullstack Developper who want <br/>to build your project. <br/> Don't hesitate to contact me !</p>
                        </Col>
                        <Col md={4}>
                            <h5>Navigation</h5>
                            <ul className="list-unstyled">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/expertise">Expertise</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h5>My links</h5>
                            <ul className="list-unstyled social-icons">
                                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a href="https://www.linkedin.com/in/baptiste-anorga-b4971b157/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            </ul>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={12} className="text-center">
                            <p>&copy; {new Date().getFullYear()} Baptiste ANORGA. All rights reserved.</p>
                        </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        )
    }
}