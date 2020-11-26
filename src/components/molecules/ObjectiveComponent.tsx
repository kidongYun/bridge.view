import React from 'react'
import Component, { ComponentProps } from '../templates/Component'
import LabelComponent from '../atoms/LabelComponent'

interface ObjectiveProps {
    component?: ComponentProps
    title: string
    description: string
    deadline: string
}

const ObjectiveComponent: React.FC<ObjectiveProps> = ({
    component,
    title,
    description,
    deadline,
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
        onClick={component?.onClick}>
        <LabelComponent label={title} size="15pt" />
        <LabelComponent label={description} />
        <LabelComponent label={deadline} />
    </Component>;

    return view;
}

export default ObjectiveComponent;