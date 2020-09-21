import React from 'react'
import Form from 'react-bootstrap/Form'

interface TextComponentProps {
    id?: string
    placeholder?: string
    onChange?: () => void
}

const TextComponent = ({ id, placeholder, onChange }: TextComponentProps) => {
    let view =
    <Form.Group>
        <Form.Control
            id={id}
            placeholder={placeholder}
            onChange={onChange}
        />
    </Form.Group>

    return view;
}

export default TextComponent;