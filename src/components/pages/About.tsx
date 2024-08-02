import SkillCard from 'components/SkillCard';
import React from 'react';

interface SkillData {
    title:string,
    icon:string
  }

  
interface Props{}

export default class About extends React.Component<Props>{

    mySkills:Array<SkillData>

    constructor (props:Props){
        super(props)
        this.mySkills = [
            {title:"HTML",
              icon:"img/skills/HTML.png"
            },
            {title:"CSS",
              icon:"img/skills/css.png"
            },
            {title:"Git",
              icon:"img/skills/Git.png"
            },
            {title:"Javascript",
              icon:"img/skills/Javascript.png"
            },
            {title:"React",
              icon:"img/skills/React.png"
            },
            {title:"Github",
              icon:"img/skills/Github.png"
            },
            {title:"Gitlab",
              icon:"img/skills/Gitlab.png"
            },
            {title:"SQL",
              icon:"img/skills/SQL.png"
            },
            {title:"Postman",
              icon:"img/skills/Postman.png"
            },
            {title:"Typescript",
              icon:"img/skills/Typescript.png"
            },
            {title:"Node",
              icon:"img/skills/Node.png"
            },
            {title:"Meteor",
             icon:"img/skills/Meteor.png"
            },
            {title:"MongoDB",
              icon:"img/skills/MongoDB.png"
            },
            {title:"Express.js",
              icon:"img/skills/Expressjs.png"
            },
            {title:"Next.js",
              icon:"img/skills/Nextjs.png"
            },
          ]
    }

    public render(): React.ReactNode {
        return (
            <div className="AboutContainer">
                <section className='d-flex about'>
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
                <section className="skills">
                    <h1 className='text-center'>My skills</h1>
                    <div className="row">
                    {this.mySkills.map((skill,index)=>(
                        <SkillCard
                        key={index}
                        title={skill.title}
                        icon={skill.icon}
                        />
                    ))}
                    </div>
                </section>
            </div>
        );
    }
  }