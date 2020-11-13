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
    marginHorizon?: string,
    marginVertical?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
    paddingHorizon?: string,
    paddingVertical?: string,
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,
    verticalAlign?: string,
    horizontalAlign?: string,
    direction?: string,
    onClick?: () => void
}

const Component: React.FC<ComponentProps> = ({ 
    width = "100%",
    height = "100%",
    activeHeight,
    backgroundColor = "transparent",
    backgroundHover = "transparent",
    borderRadius = "0px",
    borderColor = "#000000",
    borderWidth = "1px",
    borderStyle = "solid",
    marginHorizon,
    marginVertical,
    marginTop = "0px",
    marginBottom = "0px",
    marginLeft = "0px",
    marginRight = "0px",
    paddingHorizon,
    paddingVertical,
    paddingTop = "0px",
    paddingBottom = "0px",
    paddingLeft = "0px",
    paddingRight = "0px",
    verticalAlign = "center",
    horizontalAlign = "center",
    direction = "row",
    onClick, 
    children 
}) => {
    
    if(marginHorizon !== undefined) {
        marginLeft = marginHorizon;
        marginRight = marginHorizon;
    }

    if(marginVertical !== undefined) {
        marginTop = marginVertical;
        marginBottom = marginVertical;
    }

    if(paddingHorizon !== undefined) {
        paddingLeft = paddingHorizon;
        paddingRight = paddingHorizon;
    }

    if(paddingVertical !== undefined) {
        paddingTop = paddingVertical;
        paddingBottom = paddingVertical;
    }

    let view =
    <Container 
        width={width} 
        height={height}
        activeHeight={activeHeight!}
        backgroundColor={backgroundColor} 
        backgroundHover={backgroundHover}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        verticalAlign={verticalAlign}
        horizontalAlign={horizontalAlign}
        direction={direction}
        onClick={onClick}>
        {children}
    </Container>

    return view;
}

const Container = styled.div<{ 
    width: string, 
    height: string, 
    activeHeight: string
    backgroundColor: string, 
    backgroundHover: string,
    borderRadius: string,
    borderColor: string,
    borderWidth: string,
    borderStyle: string,
    marginTop: string,
    marginBottom: string,
    marginLeft: string,
    marginRight: string,
    paddingTop: string,
    paddingBottom: string,
    paddingLeft: string,
    paddingRight: string,
    verticalAlign: string,
    horizontalAlign: string,
    direction: string,
}>`
    width: ${props => props.width};
    height: ${props => props.height};
    
    background-color: ${props => props.backgroundColor};
    &:hover { background-color: ${props => props.backgroundHover }; }
    border-radius: ${props => props.borderRadius };

    &:active { height: ${props => props.activeHeight}; }
    transition: all ease 0.2s 0s;

    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    margin-left: ${props => props.marginLeft};
    margin-right: ${props => props.marginRight};

    padding-top: ${props => props.paddingTop};
    padding-bottom: ${props => props.paddingBottom};
    padding-left: ${props => props.paddingLeft};
    padding-right: ${props => props.paddingBottom};

    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
`;

export default Component;