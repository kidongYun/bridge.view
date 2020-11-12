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
            <LabelComponent label="+" labelSize="20pt" labelColor="#ffffff" labelWeight="bold" />
    </Component>

    return view;
}

export default AddComponent;