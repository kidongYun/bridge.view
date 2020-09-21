import React from 'react'
import Form from 'react-bootstrap/Form'

interface TextareaComponentProps {
    id?: string
    placeholder?: string
    rows?: string
    onChange?: () => void
}

const TextareaComponent = ({ id, placeholder, rows, onChange }: TextareaComponentProps) => {
    let view =
    <Form.Group>
        <Form.Control
            id={id}
            placeholder={placeholder}
            as="textarea"
            rows={rows}
            onChange={onChange}
        />
    </Form.Group>

    return view;
}

export default TextareaComponent;