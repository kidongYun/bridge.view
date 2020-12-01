import React from 'react'
import LabelComponent from '../atoms/LabelComponent'
import Component from '../templates/Component'

interface AddProps {
    onClick?: () => void
}

const AddComponent: React.FC<AddProps> = (props) => {

    let view =
    <Component
        height="100px"
        onClick={props.onClick} 
        backgroundColor="#007bff"
        borderRadius="10px">
        <LabelComponent label="+" size="20pt" color="#ffffff" weight="bold"/>
    </Component>

    return view;
}

AddComponent.defaultProps = {
    onClick: () => {}
}

export default AddComponent;