import React from 'react'
import Form from 'react-bootstrap/Form'
import Component from '../templates/Component'

interface TextareaProps {
    value?: string
    placeholder?: string
    rows?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComponent: React.FC<TextareaProps> = (props) => {
    let view =
    <Component>
        <Form.Control
            defaultValue={props.value}
            placeholder={props.placeholder}
            as="textarea"
            rows={props.rows}
            onChange={props.onChange}
        />
    </Component>

    return view;
}

TextareaComponent.defaultProps = {
    value: "",
    placeholder: "",
    rows: "5",
    onChange: () => {}
}

export default TextareaComponent;