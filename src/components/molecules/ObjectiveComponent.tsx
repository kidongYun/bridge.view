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
        <>
        <LabelComponent 
            label={title} 
            size="15pt" 
            component={{ height: "200%" }} 
        />

        <LabelComponent 
            label={description} 
            component={{
                width: "90%",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2px",
                marginBottom: "2px"
            }} 
        />

        <LabelComponent 
            label={deadline} 
            component={{
                width: "90%",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                horizontalAlign: "flex-start",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "2px",
                marginBottom: "2px"
            }}
        />
        </>
    </Component>;

    return view;
}

export default ObjectiveComponent;