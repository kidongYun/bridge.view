import React from 'react'
import Form from 'react-bootstrap/Form'

export interface OptionProps {
    title: string
    value: string
}

interface SelectComponentProps {
    selected?: string
    options?: OptionProps[]
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent = ({ selected, options, onChange }: SelectComponentProps) => {
    let optionView = <></>;
    if(options !== undefined) {
        optionView = 
        <>
            {options.map((option) => { return <option value={option.value}>{option.title}</option>})}
        </>;
    }

    let view =
    <Form.Group>
        <Form.Control as="select" defaultValue={selected} onChange={onChange}>
            {optionView}
        </Form.Control>
    </Form.Group>

    return view;
}

export default SelectComponent;