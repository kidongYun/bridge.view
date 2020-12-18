import React from 'react'
import Form from 'react-bootstrap/Form'
import Component from '../templates/Component'

interface LabelProps {
    label?: string
    size?: string
    color?: string
    weight?: "normal" | "bold" | "bolder" | "lighter" | "number" | "initial" | "inherit"
}

const LabelComponent: React.FC<LabelProps> = (props) => {
    let view = 
    <Component fontSize={props.size} fontWeight={props.weight} color={props.color}>
        <Form.Label>{props.label}</Form.Label>
    </Component>

    return view;
}

LabelComponent.defaultProps = {
    label: "",
    size: "10pt",
    color: "#000000",
    weight: "normal"
}

export default LabelComponent;