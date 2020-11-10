import React from 'react'
import Form from 'react-bootstrap/Form'

import Component from './Component'

interface TextareaProps extends Component {
    value?: string
    placeholder?: string
    rows?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComponent = ({ value, placeholder, rows, onChange }: TextareaProps) => {
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