import React from 'react'
import Form from 'react-bootstrap/Form'

import Component, { ComponentProps } from './Component'

interface LabelProps extends ComponentProps {
    label: string
}

const LabelComponent: React.FC<LabelProps> = ({ 
    width,
    height,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    backgroundColor,
    backgroundHover,
    onClick, 
    label
}) => {

    let view = 
    <Component>
        <Form.Group>
            <Form.Label>{label}</Form.Label>
        </Form.Group>
    </Component>

    return view;
}

export default LabelComponent;