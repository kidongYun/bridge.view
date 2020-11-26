import React from 'react'
import Form from 'react-bootstrap/Form'
import Component from '../templates/Component'

interface TextProps {
    value?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextComponent: React.FC<TextProps> = (props) => {
    let view =
    <Component>
        <Form.Control
            defaultValue={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </Component>

    return view;
}

TextComponent.defaultProps = {
    value: "",
    placeholder: "",
    onChange: () => {}
}

export default TextComponent;