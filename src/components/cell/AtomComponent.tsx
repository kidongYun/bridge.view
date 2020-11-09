import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

export interface AtomProps {
    element: Object,
    width?: string,
    height?: string,
    borderRadius?: string,
    borderColor?: string,
    borderWidth?: string,
    borderStyle?: string,
    backgroundColor?: string, 
    backgroundHover?: string, 
}

const AtomComponent = ({} : AtomProps) => {
    return <Container width="100%" height="100%"></Container>
}

const Container = styled.div<{ width: string, height: string }>`
    width: ${props => props.width }
    height: ${props => props.height }
    background-color: #827123;
`;

export default AtomComponent;