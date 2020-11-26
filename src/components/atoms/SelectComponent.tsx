import React from 'react'
import Form from 'react-bootstrap/Form'
import Component from '../templates/Component'

interface SelectProps {
    value?: string
    options: Array<{ value: string, title: string }>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent: React.FC<SelectProps> = (props) => {
    let optionView = <></>;

    if(props.options !== undefined) {
        optionView = 
        <>
            {props.options.map((option) => <option value={option.value}>{option.title}</option> )}
        </>;
    }

    let view =
    <Component>
        <Form.Control as="select" defaultValue={props.value} onChange={props.onChange}>
            {optionView}
        </Form.Control>
    </Component>

    return view;
}

SelectComponent.defaultProps = {
    value: "",
    onChange: () => {}
}

export default SelectComponent;