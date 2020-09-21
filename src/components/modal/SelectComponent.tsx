import React from 'react'
import Form from 'react-bootstrap/Form'

export interface OptionProps {
    title: string
    value: string
}

interface SelectComponentProps {
    id?: string
    selected?: string
    options?: OptionProps[]
    onChange?: () => void
}

const SelectComponent = ({ id, selected, options, onChange }: SelectComponentProps) => {
    let view =
    <Form.Group>
        <Form.Control id={id} as="select" defaultValue={selected} onChange={onChange}>
            {options!.map((option) => { return <option value={option.value}>{option.title}</option>})}
        </Form.Control>
    </Form.Group>

    return view;
}

export default SelectComponent;