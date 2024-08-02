import React from 'react';


export default class Contact extends React.Component{

    public render(): React.ReactNode {
        return (
        <div className="ContactContainer d-flex flex-column align-items-center justify-content-center text-center">
            <div className="text-container position-relative">
                <h1 className='fw-bold'>Available for freelance opportunities</h1>
                    <p>Have an exciting project you need help with?
                        <br/> 
                        Send me an <a className="fw-bold text-decoration-none" href="mailto:baptiste.anorga.pro@gmail.com?" >email</a> or contact me!
                    </p>
            </div>
        </div>
        
        );
    }
  }