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
        borderLeft="1px solid #dddddd"
        borderRight="1px solid #dddddd"
        borderBottom="1px solid #dddddd"
        borderTop="1px solid #dddddd"
        backgroundColor="#eeeeee" 
        backgroundHover="#e4e4e4"
        borderRadius="10px"
        marginTop="5px"
        marginBottom="5px"
        onClick={props.onClick}>
        <Component width="10%" borderRight="1px solid #dddddd">
            <Component width="50%" height="50%">
                <LabelComponent label={props.objective.priorityId + ""} size="20pt" weight="bold"/>
            </Component>
        </Component>
        <Component direction="column">
            <Component horizontalAlign="flex-start">
                <Component width="auto" height="auto" marginLeft="10px">
                    <LabelComponent label={props.objective.title} weight="bold"/>
                </Component>    
            </Component>
            <LabelComponent label={props.plan.content}/>
        </Component>
        <Component width="10%">
        </Component>
    </Component>

    return view;
}

PlanComponent.defaultProps = {
    
}

export default PlanComponent;