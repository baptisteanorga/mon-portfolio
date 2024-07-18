import React from 'react';
import {} from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default class Home extends React.Component{

    public render(): React.ReactNode {
        return (
            <div className="HomeContainer d-flex flex-column align-items-center justify-content-center text-center">
                <div className="text-container position-relative">
                    <h1>HEY, I'M BAPTISTE ANORGA</h1>
                    <p className='textcenter'>A Fullstack Developer who builds the frontend of websites and web applications,
                        <br/> 
                        contributing to the success of the product
                    </p>

                    <div className="fw-bold"><Link className="button" to='/about'>More <i className='fa fas fa-chevron-right'></i></Link></div>
                </div>
                <div className="background-img"></div>
            </div>
          
        );
    }
  }