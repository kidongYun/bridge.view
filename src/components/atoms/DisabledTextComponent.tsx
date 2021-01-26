import React from 'react'
import Form from 'react-bootstrap/Form'
import Component from '../templates/Component'

interface DisabledTextProps {
    type?: "email" | "password" | ""
    value?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const DisabledTextComponent: React.FC<DisabledTextProps> = (props) => {
    
    let view =
    <Component>
        <Form.Control
            disabled
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </Component>

    return view;
}


DisabledTextComponent.defaultProps = {
    type: "",
    value: "",
    placeholder: "",
    onChange: () => {}
}

export default DisabledTextComponent;