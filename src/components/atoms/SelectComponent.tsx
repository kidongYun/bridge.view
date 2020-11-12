import React from 'react'
import Form from 'react-bootstrap/Form'

import OptionComponent, { OptionProps } from './OptionComponent'
import Component, { ComponentProps } from './Component'

interface SelectProps extends ComponentProps {
    value?: string
    options?: Array<OptionProps>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent: React.FC<SelectProps> = ({ 
    width,
    height,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    backgroundColor,
    backgroundHover,
    onClick, 
    value, 
    options, 
    onChange 
}) => {
    let optionView = <></>;

    if(options !== undefined) {
        optionView = 
        <>
            {options.map((option) => <OptionComponent title={option.title} value={option.value} /> )}
        </>;
    }

    let view =
    <Component>
        <Form.Group>
            <Form.Control as="select" defaultValue={value} onChange={onChange}>
                {optionView}
            </Form.Control>
        </Form.Group>
    </Component>

    return view;
}

export default SelectComponent;