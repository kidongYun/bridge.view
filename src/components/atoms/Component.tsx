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
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,
    verticalAlign?: string,
    horizontalAlign?: string,
    direction?: string,
    onClick?: () => void
}

export const Default: ComponentProps = {
    width: "100%",
    height: "100%",
    activeHeight: "100%",
    backgroundColor: "transparent",
    backgroundHover: "transparent",
    borderRadius: "0px",
    borderColor: "#000000",
    borderWidth: "1px",
    borderStyle: "solid",
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "0px",
    marginRight: "0px",
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    paddingRight: "0px",
    verticalAlign: "center",
    horizontalAlign: "center",
    direction: "row",
    onClick: () => {}
}

const Component: React.FC<ComponentProps> = (props = Default) => {

    let view =
    <Container 
        width={props.width!} 
        height={props.height!}
        activeHeight={props.activeHeight!}
        backgroundColor={props.backgroundColor!} 
        backgroundHover={props.backgroundHover!}
        borderRadius={props.borderRadius!}
        borderColor={props.borderColor!}
        borderWidth={props.borderWidth!}
        borderStyle={props.borderStyle!}
        marginTop={props.marginTop!}
        marginBottom={props.marginBottom!}
        marginLeft={props.marginLeft!}
        marginRight={props.marginRight!}
        paddingTop={props.paddingTop!}
        paddingBottom={props.paddingBottom!}
        paddingLeft={props.paddingLeft!}
        paddingRight={props.paddingRight!}
        verticalAlign={props.verticalAlign!}
        horizontalAlign={props.horizontalAlign!}
        direction={props.direction!}
        onClick={props.onClick!}>
        {props.children}
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