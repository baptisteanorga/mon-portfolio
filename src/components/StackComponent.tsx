import React, { } from 'react';

interface Props {
  title:string,
  content:string,
  icon:string
}

export default class StackComponent extends React.Component<Props>{

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:Props){
        super(props)
       
    }

    public render(): React.ReactNode {
        return (
            <>
            <div className="expertise-card">
            <i className={this.props.icon}></i>
           {this.props.title}
            <p>
                {this.props.content}

            </p>
            </div>
            </>
        )
    }
}

