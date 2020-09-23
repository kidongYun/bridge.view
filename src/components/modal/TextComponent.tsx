import React from 'react'
import Form from 'react-bootstrap/Form'

interface TextComponentProps {
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextComponent = ({ value, placeholder, onChange }: TextComponentProps) => {
    let view =
    <Form.Group>
        <Form.Control
            defaultValue={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    </Form.Group>

    return view;
}

export default TextComponent;