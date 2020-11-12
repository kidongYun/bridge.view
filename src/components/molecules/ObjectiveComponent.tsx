import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'
import LabelComponent from '../atoms/LabelComponent'

interface ObjectiveProps extends ComponentProps {
    title: string
    description: string
    deadline: string
}

const ObjectiveComponent: React.FC<ObjectiveProps> = ({
    title,
    description,
    deadline,
    onClick
}) => {
    let view =
    <Component
        height="250px"
        activeHeight="260px"
        backgroundColor="#eeeeee" 
        backgroundHover="#e4e4e4" 
        borderRadius="10px"
        marginTop="5px"
        marginBottom="5px"
        direction="column"
        onClick={onClick}>
        <LabelComponent label={title} height="200%" labelSize="15pt"/>
        <LabelComponent label={description} width="90%" borderRadius="10px" backgroundColor="#ffffff" marginHorizon="auto" marginTop="2px" marginBottom="2px" />
        <LabelComponent label={deadline} width="90%" borderRadius="10px" backgroundColor="#ffffff" horizontalAlign="flex-start" marginHorizon="auto" marginTop="2px" marginBottom="2px" />
    </Component>;

    return view;
}

export default ObjectiveComponent;