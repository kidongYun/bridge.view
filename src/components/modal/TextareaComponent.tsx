import React from 'react'
import Form from 'react-bootstrap/Form'

interface TextareaComponentProps {
    placeholder?: string
    rows?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComponent = ({ placeholder, rows, onChange }: TextareaComponentProps) => {
    let view =
    <Form.Group>
        <Form.Control
            placeholder={placeholder}
            as="textarea"
            rows={rows}
            onChange={onChange}
        />
    </Form.Group>

    return view;
}

export default TextareaComponent;