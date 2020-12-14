import React from 'react'
import LabelComponent from '../atoms/LabelComponent'
import Component from '../templates/Component'

interface PlanProps {
    objectiveId: number
    content: string

}

const PlanComponent: React.FC<PlanProps> = (props) => {
    let view =
    <Component
        height="100px" 
        activeHeight="110px" 
        backgroundColor="#eeeeee" 
        backgroundHover="#e4e4e4"
        borderRadius="10px"
        marginTop="5px"
        marginBottom="5px"
        direction="column">
        <LabelComponent label={props.objectiveId.toLocaleString()}/>
        <LabelComponent label={props.content}/>
    </Component>

    return view;
}

PlanComponent.defaultProps = {
    
}

export default PlanComponent;