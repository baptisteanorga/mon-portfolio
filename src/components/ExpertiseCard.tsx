import React, { } from 'react';

interface Props {
  title:string,
  content:string,
  icon:string,
  index:number
}

export default class ExpertiseCard extends React.Component<Props>{

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:Props){
        super(props)
       
    }

    public render(): React.ReactNode {
        return (
            <>
            <div className="expertise-card">
                <div className="expertiseCardHeader d-flex align-items-center mb-3 ms-3">
                    <i className={this.props.icon}></i>
                    <h2 className={'expertiseTitle-'+this.props.index+" fw-bold ms-4 mb-4"}>
                        {this.props.title} 
                    </h2>
                </div>
            <p className='fw-light fs-5'>
                {this.props.content}

            </p>
            </div>
            </>
        )
    }
}

