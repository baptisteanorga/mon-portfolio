import React from 'react';
import ExpertiseCard from "components/ExpertiseCard";
import SkillCard from 'components/SkillCard';

interface ExpertiseData {
  title:string,
  content:string,
  icon:string
}

interface SkillData {
  title:string,
  icon:string
}


interface Props{}

type State={}

export default class Expertise extends React.Component<Props,State>{

  expertise:Array<ExpertiseData>

  mySkills:Array<SkillData>

  constructor (props:Props){

    super(props)
    this.expertise = [
      {
        title: 'Software Development',
        content: 'Experienced in both functional and OOP: C#, JavaScript, TypeScript...',
        icon:"fa fa-laptop",
      },
      {
        title: 'Frontend Development',
        content: 'Over 5 years of development experience in HTML, CSS, JS, React Framework.',
        icon:"fab fa-react",
      },
      {
        title: 'Backend Development',
        content: 'Node.JS, Express, Meteor, MongoDB, SQL',
        icon:"fa fa-database",
      }
    ]

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
            <div className='expertise'>
                <h1 className='text-center'>My Expertise</h1>
                <div className="expertise-grid">
                {this.expertise.map((stack, index) => (
                    <ExpertiseCard
                    key={index}
                    index={index}
                    title={stack.title}
                    content={stack.content}
                    icon={stack.icon}/>
                ))}
                </div>
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
            </div>
        );
    }
  }