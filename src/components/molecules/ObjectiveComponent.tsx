import React from 'react'
import LabelComponent from '../atoms/LabelComponent'
import ImageComponent from '../atoms/ImageComponent'
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
        height="100px" 
        activeHeight="110px" 
        backgroundColor="#eeeeee" 
        backgroundHover="#e4e4e4"
        borderRadius="10px"
        marginTop="5px"
        marginBottom="5px"
        direction="column"
        onClick={props.onClick}>
        <Component>
            <Component width="20%" borderRight="1px solid #dddddd">
                <Component width="50%" height="50%" >
                    <ImageComponent src="/images/objective_icon.png" alt="objective_icon"/>
                </Component>
            </Component>
            <Component direction="column">
                <Component horizontalAlign="flex-start">
                    <Component width="auto" direction="column" paddingLeft="30px">
                        <LabelComponent label={props.title}/>
                    </Component>
                </Component>
                <Component height="2px" horizontalAlign="flex-start">
                    <Component width="10%" backgroundColor="#28a745"/>
                </Component>
            </Component>
            <Component width="20%" borderLeft="1px solid #dddddd">
                <LabelComponent label="상태"/>
            </Component>
        </Component>
    </Component>

    return view;
}

ObjectiveComponent.defaultProps = {
    
}

export default ObjectiveComponent;