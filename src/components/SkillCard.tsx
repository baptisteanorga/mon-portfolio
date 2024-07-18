import React, { } from 'react';

interface Props {
  title:string,
  icon:string,
}

export default class SkillCard extends React.Component<Props>{

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:Props){
        super(props)
       
    }

    public render(): React.ReactNode {
        return (
            <>
                <div className="col-2 skillContainer d-flex flex-column align-items-center">
                        <img src={this.props.icon} alt={this.props.title} />
                        <p className='fw-light fs-6 text-center'>
                            {this.props.title}
                        </p>
                </div>
            </>
        )
    }
}

