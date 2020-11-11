import React from 'react'
import Form from 'react-bootstrap/Form'

import Component, { ComponentProps } from './Component'

interface TextareaProps extends ComponentProps {
    value?: string
    placeholder?: string
    rows?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComponent: React.FC<TextareaProps> = ({ 
    width,
    height,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    backgroundColor,
    backgroundHover,
    onClick, 
    value, 
    placeholder, 
    rows, 
    onChange 
}) => {
    let view =
    <Component>
        <Form.Group>
            <Form.Control
                defaultValue={value}
                placeholder={placeholder}
                as="textarea"
                rows={rows}
                onChange={onChange}
            />
        </Form.Group>
    </Component>

    return view;
}

export default TextareaComponent;