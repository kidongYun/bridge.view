import React from 'react'
import styled from 'styled-components'

export interface ComponentProps {
    width?: string,
    height?: string,
    borderRadius?: string,
    borderColor?: string,
    borderWidth?: string,
    borderStyle?: string,
    backgroundColor?: string, 
    backgroundHover?: string, 
    onClick?: () => void
}

const Component: React.FC<ComponentProps> = ({ 
    width = "100%",
    height = "100%",
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    backgroundColor,
    backgroundHover,
    onClick, 
    children 
}) => {

    let view =
    <Container width={width} height={height} onClick={onClick}>
        {children}
    </Container>

    return view;
}

const Container = styled.div<{ width: string, height: string }>`
    width: ${props => props.width}
    height: ${props => props.height}
`;

export default Component;