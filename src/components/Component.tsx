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
    backgroundColor = "transparent",
    backgroundHover,
    onClick, 
    children 
}) => {

    let view =
    <Container width={width} height={height} backgroundColor={backgroundColor} onClick={onClick}>
        {children}
    </Container>

    return view;
}

const Container = styled.div<{ width: string, height: string, backgroundColor: string }>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
`;

export default Component;