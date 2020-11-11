import React from 'react'
import Form from 'react-bootstrap/Form'

import Component, { ComponentProps } from './Component'

interface TextProps extends ComponentProps {
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextComponent: React.FC<TextProps> = ({ 
    width = "100%",
    height = "100%",
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    backgroundColor,
    backgroundHover,
    onClick, 
    value, 
    placeholder, 
    onChange 
}) => {
    let view =
    <Component>
        <Form.Group>
            <Form.Control
                defaultValue={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Form.Group>
    </Component>

    return view;
}

export default TextComponent;