import React from 'react'
import Form from 'react-bootstrap/Form'

import OptionComponent, { OptionProps } from './OptionComponent'
import Component from './Component'

interface SelectProps extends Component {
    value?: string
    options?: Array<OptionProps>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent = ({ value, options, onChange }: SelectProps) => {
    let optionView = <></>;

    if(options !== undefined) {
        optionView = 
        <>
            {options.map((option) => <OptionComponent title={option.title} value={option.value} /> )}
        </>;
    }

    let view =
    <Form.Group>
        <Form.Control as="select" defaultValue={value} onChange={onChange}>
            {optionView}
        </Form.Control>
    </Form.Group>

    return view;
}

export default SelectComponent;