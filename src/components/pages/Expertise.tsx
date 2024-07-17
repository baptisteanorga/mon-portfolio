import React from 'react';
import StackComponent from "components/StackComponent";

interface ExpertiseData {
  title:string,
  content:string,
  icon:string
}

interface Props{}

type State={}

export default class Expertise extends React.Component<Props,State>{

  expertise:Array<ExpertiseData>

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
  }


    public render(): React.ReactNode {
        return (
            <div className='expertise'>
                <h1>My Expertise</h1>
                <div className="expertise-grid">
                {this.expertise.map((stack, index) => (
                    <StackComponent
                    key={index}
                    title={stack.title}
                    content={stack.content}
                    icon={stack.icon}/>
                ))}

                </div>
            </div>


        );
    }
  }