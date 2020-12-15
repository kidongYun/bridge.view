import React from 'react'
import Objective from '../../redux/stores/objective'
import Plan from '../../redux/stores/plan'
import LabelComponent from '../atoms/LabelComponent'
import Component from '../templates/Component'

interface PlanProps {
    objective: Objective
    plan: Plan
    onClick: () => void
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
        direction="column"
        onClick={props.onClick}>
        <Component horizontalAlign="flex-start">
            <Component width="auto" height="auto">
                <LabelComponent label={props.objective.title}/>
            </Component>    
        </Component>
        <LabelComponent label={props.plan.content}/>
    </Component>

    return view;
}

PlanComponent.defaultProps = {
    
}

export default PlanComponent;