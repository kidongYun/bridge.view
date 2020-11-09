import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

interface TextProps {
    text: string
    fontSize?: string
    color?: string
    borderRadius?: string
    backgroundColor?: string
    verticalAlign?: string
    horizontalAlign?: string 
}

const TextComponent = ({ 
    text, 
    fontSize = "10pt", 
    color ="#000000", 
    verticalAlign, 
    horizontalAlign } : TextProps) => {
    return <Container fontSize={fontSize!} color={color!} verticalAlign={verticalAlign!} horizontalAlign={horizontalAlign!}>{text}</Container>
}

const Container = styled.div<{ fontSize: string, color: string, verticalAlign: string, horizontalAlign: string }>`
    width: 100%;
    height: 100%;

    font-size: ${props => props.fontSize};
    color: ${props => props.color};

    display: flex;
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
`;

export default TextComponent;
