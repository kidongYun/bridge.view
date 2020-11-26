import React from 'react'
import styled from 'styled-components'
import { Root } from '../Root'
import Form from 'react-bootstrap/Form'

interface LabelProps {
    label: string
    size?: string
    color?: string
    weight?: string
}

const LabelComponent: React.FC<LabelProps> = ({
    label,
    size = "10pt",
    color = "#000000",
    weight = "normal",                                   
}) => {
    let view = 
    <Container 
        size={size} 
        color={color} 
        weight={weight}>
        <Form.Label>{label}</Form.Label>
    </Container>

    return view;
}

const Container = styled(Root)<{ 
    size: string, 
    color: string, 
    weight: string
}>`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.color};
`;

export default LabelComponent;