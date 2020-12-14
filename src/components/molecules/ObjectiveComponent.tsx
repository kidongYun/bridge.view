import React from 'react'
import LabelComponent from '../atoms/LabelComponent'
import Component from '../templates/Component'

interface ObjectiveProps {
    title: string
    description: string
    deadline: string
    onClick: () => void
}

const ObjectiveComponent: React.FC<ObjectiveProps> = (props) => {

    let view =
    <Component 
        height="200px" 
        activeHeight="210px" 
        backgroundColor="#eeeeee" 
        backgroundHover="#e4e4e4"
        borderRadius="10px"
        marginTop="5px"
        marginBottom="5px"
        direction="column"
        onClick={props.onClick}>
        <LabelComponent label={props.title} size="15pt"/>
        <LabelComponent label={props.description} />
        <LabelComponent label={props.deadline} />
    </Component>

    return view;
}

ObjectiveComponent.defaultProps = {
    
}

export default ObjectiveComponent;