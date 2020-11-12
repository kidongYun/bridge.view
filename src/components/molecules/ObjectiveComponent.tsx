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
        <LabelComponent label={title} labelSize="15pt"/>
        <LabelComponent label={description} width="80%" borderRadius="10px" backgroundColor="#ffffff" />
        <LabelComponent label={deadline}/>
    </Component>;

    return view;
}

export default ObjectiveComponent;