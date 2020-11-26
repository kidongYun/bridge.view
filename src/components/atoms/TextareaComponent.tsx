import React from 'react'
import styled from 'styled-components'
import { RootContainer } from '../RootContainer'
import Form from 'react-bootstrap/Form'

interface TextareaProps {
    value?: string
    placeholder?: string
    rows?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComponent: React.FC<TextareaProps> = ({ 
    value = "", 
    placeholder = "", 
    rows = "10", 
    onChange = () => {}
}) => {
    let view =
    <Container>
        <Form.Control
            defaultValue={value}
            placeholder={placeholder}
            as="textarea"
            rows={rows}
            onChange={onChange}
        />
    </Container>

    return view;
}

const Container = styled(RootContainer)``;

export default TextareaComponent;