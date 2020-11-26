import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Component from '../templates/Component'

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
    <Component>
        <Container 
            size={size} 
            color={color} 
            weight={weight}>
            <Form.Label>{label}</Form.Label>
        </Container>
    </Component>

    return view;
}

const Container = styled.div<{ 
    size: string, 
    color: string, 
    weight: string
}>`
    width: 100%;
    height: 100%; 

    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.color};
`;

export default LabelComponent;