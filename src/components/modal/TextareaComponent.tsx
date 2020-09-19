import React from 'react'
import Form from 'react-bootstrap/Form'

interface TextareaComponentProps {
    id?: string
    placeholder?: string
    onChange?: () => void
    rows: string
}

const TextareaComponent = ({ id, placeholder, onChange, rows }: TextareaComponentProps) => {
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