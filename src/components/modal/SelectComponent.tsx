import React from 'react'
import Form from 'react-bootstrap/Form'

interface OptionProps {
    value: string
    title: string
}

interface SelectComponentProps {
    id?: string
    options: OptionProps[]
    selected?: string
    onChange?: () => void
}

const SelectComponent = ({ id, options, selected, onChange }: SelectComponentProps) => {
    let view =
    <Form.Group>
        <Form.Control id={id} as="select" defaultValue={selected} onChange={onChange}>
            {options.map((option) => { return <option value={option.value}>{option.title}</option>})}
        </Form.Control>
    </Form.Group>

    return view;
}

export default SelectComponent;