import React from 'react'
import Form from 'react-bootstrap/Form'

interface TextareaComponentProps {
    value?: string
    placeholder?: string
    rows?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComponent = ({ value, placeholder, rows, onChange }: TextareaComponentProps) => {
    let view =
    <Form.Group>
        <Form.Control
            defaultValue={value}
            placeholder={placeholder}
            as="textarea"
            rows={rows}
            onChange={onChange}
        />
    </Form.Group>

    return view;
}

export default TextareaComponent;