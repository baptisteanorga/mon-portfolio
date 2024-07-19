import React from 'react';


export default class About extends React.Component{

    public render(): React.ReactNode {
        return (
            <div className="AboutContainer">
                <section className='d-flex'>
                    <div className="text-container">
                        <h1>About me</h1>
                        <p>Hello again ! Thanks for navigating this far ! </p>
                        <div className='text-break mb-4'>
                            I'm a full stack developer based in Paris, France.
                            <br/>
                            With over 5 years' experience in the design and development of web applications, I specialize in the use of React, Node.js and TypeScript. As a freelancer, I'm happy to put my skills to work for your teams, to help you bring your projects to fruition.
                            
                            <br/>

                            With user experience at the heart of my concerns, I've developed a strong interest in UX/UI design. In order to provide clean, easily maintainable code, I chose to specialize in TypeScript.

                            <br/>
                            Motivated by challenges, I am determined to propose creative and effective solutions to meet my Customers' need. 
                            Please don't hesitate to contact me to discuss your projects and how i can help your realize them. 
                        </div>
                    <div className="fw-bold"><a className="button" target="_blank" href='/assets/CV_Baptiste_ANORGA.pdf'>Check out my CV <i className='fa fas fa-chevron-right'></i></a></div>
                    </div>
                    <div className="col-md-2">
                        <img src="img/me.jpg" alt="me" />
                    </div>
                </section>
            </div>
        );
    }
  }