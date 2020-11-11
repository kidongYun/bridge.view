import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export interface ComponentProps {
    width?: string,
    height?: string,
    activeHeight?: string,
    backgroundColor?: string, 
    backgroundHover?: string, 
    borderRadius?: string,
    borderColor?: string,
    borderWidth?: string,
    borderStyle?: string,
    onClick?: () => void
}

const Component: React.FC<ComponentProps> = ({ 
    width = "100%",
    height = "100%",
    backgroundColor = "transparent",
    backgroundHover = "transparent",
    borderRadius = "0px",
    borderColor = "#000000",
    borderWidth = "1px",
    borderStyle = "solid",
    activeHeight,
    onClick, 
    children 
}) => {
    
    let view =
    <Container 
        width={width} 
        height={height}
        backgroundColor={backgroundColor} 
        backgroundHover={backgroundHover}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        activeHeight={activeHeight!}
        onClick={onClick}>
        {children}
    </Container>

    return view;
}

const Container = styled.div<{ 
    width: string, 
    height: string, 
    backgroundColor: string, 
    backgroundHover: string,
    borderRadius: string,
    borderColor: string,
    borderWidth: string,
    borderStyle: string,
    activeHeight: string
}>`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    &:hover {
        background-color: ${props => props.backgroundHover };
    }
    border-radius: ${props => props.borderRadius };
    &:active {
        height: ${props => props.activeHeight};
    }
    transition: all ease 0.2s 0s;
`;

export default Component;