import React from 'react'
import Form from 'react-bootstrap/Form'

import Component from './Component'

interface TextProps extends Component {
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextComponent = ({ value, placeholder, onChange }: TextProps) => {
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