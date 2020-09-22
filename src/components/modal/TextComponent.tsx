import React from 'react'
import Form from 'react-bootstrap/Form'

interface TextComponentProps {
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextComponent = ({ placeholder, onChange }: TextComponentProps) => {
    let view =
    <Form.Group>
        <Form.Control
            placeholder={placeholder}
            onChange={onChange}
        />
    </Form.Group>

    return view;
}

export default TextComponent;