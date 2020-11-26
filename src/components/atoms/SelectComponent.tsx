import React from 'react'
import styled from 'styled-components'
import { RootContainer } from '../RootContainer'
import Form from 'react-bootstrap/Form'

interface SelectProps {
    value?: string
    options: Array<{ value: string, title: string }>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent: React.FC<SelectProps> = ({ 
    value = "", 
    options, 
    onChange = () => {}
}) => {
    let optionView = <></>;

    if(options !== undefined) {
        optionView = 
        <>
            {options.map((option) => <option value={option.value}>{option.title}</option> )}
        </>;
    }

    let view =
    <Container>
        <Form.Control as="select" defaultValue={value} onChange={onChange}>
            {optionView}
        </Form.Control>
    </Container>

    return view;
}

const Container = styled(RootContainer)``;

export default SelectComponent;