import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'
import LabelComponent from '../atoms/LabelComponent'

interface AddProps extends ComponentProps {

}

const AddComponent: React.FC<AddProps> = ({
    onClick
}) => {
    let view =
    <Component
        height="100px"
        activeHeight="110px"
        backgroundColor="#007bff"
        backgroundHover="#0069d9"
        borderRadius="10px"
        marginTop="10px"
        marginBottom="10px"
        onClick={onClick}>

            <LabelComponent 
                label="+" 
                size="20pt" 
                color="#ffffff" 
                weight="bold" 
            />
            
    </Component>

    return view;
}

export default AddComponent;