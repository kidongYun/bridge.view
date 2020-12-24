import React from 'react'
import LabelComponent from '../atoms/LabelComponent'
import ImageComponent from '../atoms/ImageComponent'
import Component from '../templates/Component'
import Objective from '../../redux/stores/objective'

interface ObjectiveProps {
    objective: Objective
    onClick: () => void
}

const ObjectiveComponent: React.FC<ObjectiveProps> = (props) => {

    let view =
    <Component 
        height="80px" 
        activeHeight="90px" 
        backgroundColor="#eeeeee" 
        backgroundHover="#e4e4e4"
        borderRadius="10px"
        borderLeft="1px solid #dddddd"
        borderRight="1px solid #dddddd"
        borderBottom="1px solid #dddddd"
        borderTop="1px solid #dddddd"
        marginTop="5px"
        marginBottom="5px"
        direction="column"
        onClick={props.onClick}>
        <Component>
            <Component width="10%" minWidth="80px" borderRight="1px solid #dddddd">
                <Component width="50%" height="50%" >
                    <LabelComponent label={props.objective.priority + ""} size="20pt" weight="bold"/>
                </Component>
            </Component>
            <Component direction="column">
                <Component horizontalAlign="flex-start">
                    <Component width="auto" direction="column" paddingLeft="30px">
                        <LabelComponent label={props.objective.title} weight="bold"/>
                    </Component>
                </Component>
                <Component height="2px" horizontalAlign="flex-start">
                    <Component width="10%" backgroundColor="#28a745"/>
                </Component>
            </Component>
            <Component width="10%" borderLeft="1px solid #dddddd">
                <LabelComponent label="상태"/>
            </Component>
        </Component>
    </Component>

    return view;
}

ObjectiveComponent.defaultProps = {
    
}

export default ObjectiveComponent;