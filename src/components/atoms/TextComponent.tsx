import React from 'react'
import styled from 'styled-components'
import { RootContainer } from '../RootContainer'
import Form from 'react-bootstrap/Form'

interface TextProps {
    value?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextComponent: React.FC<TextProps> = ({
    value = "", 
    placeholder = "", 
    onChange = () => {} 
}) => {
    let view =
    <Container>
        <Form.Control
            defaultValue={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    </Container>

    return view;
}

const Container = styled(RootContainer)``;

export default TextComponent;