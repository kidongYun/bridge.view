import React from 'react'
import styled from 'styled-components'

export interface ComponentProps {
    width?: string,
    height?: string,
    minWidth?: string,
    minHeight?: string,
    maxWidth?: string,
    maxHeight?: string,
    activeHeight?: string,
    backgroundColor?: string, 
    backgroundHover?: string, 
    borderRadius?: string,
    borderTop?: string,
    borderBottom?: string,
    borderLeft?: string,
    borderRight?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
    paddingTop?: string,
    paddingBottom?: string,
    paddingLeft?: string,
    paddingRight?: string,
    verticalAlign?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline",
    horizontalAlign?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around",
    direction?: "column" | "row",
    fontSize?: string,
    fontWeight?: "normal" | "bold" | "bolder" | "lighter" | "number" | "initial" | "inherit",
    color?: string,
    display?: "flex" | "none" | "inline-block",
    overflowX?: "visible" | "hidden" | "scroll" | "auto",
    overflowY?: "visible" | "hidden" | "scroll" | "auto",
    onClick?: () => void
}

const Component: React.FC<ComponentProps> = (props) => {
    let view =
    <Container
        width={props.width!} 
        height={props.height!}
        minWidth={props.minWidth!}
        minHeight={props.minHeight!}
        maxWidth={props.maxWidth!}
        maxHeight={props.maxHeight!}
        activeHeight={props.activeHeight!}
        backgroundColor={props.backgroundColor!} 
        backgroundHover={props.backgroundHover!}
        borderRadius={props.borderRadius!}
        borderTop={props.borderTop!}
        borderBottom={props.borderBottom!}
        borderLeft={props.borderLeft!}
        borderRight={props.borderRight!}
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
        fontSize={props.fontSize!}
        fontWeight={props.fontWeight!}
        color={props.color!}
        display={props.display!}
        overflowX={props.overflowX!}
        overflowY={props.overflowY!}
        onClick={props.onClick!}>
        {props.children!}
    </Container>

    return view;
}

Component.defaultProps = {
    width: "100%",
    height: "100%",
    minWidth: "0%",
    minHeight: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    activeHeight: "",
    backgroundColor: "transparent",
    backgroundHover: "transparent",
    borderRadius: "0px",
    borderTop: "solid 0px #000000",
    borderBottom: "solid 0px #000000",
    borderLeft: "solid 0px #000000",
    borderRight: "solid 0px #000000",
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
    fontSize: "1rem",
    fontWeight: "normal",
    color: "#000000",
    display: "flex",
    overflowX: "visible",
    overflowY: "visible",
    onClick: () => {}
};

const Container = styled.div<{ 
    width: string,
    height: string,
    minWidth: string,
    minHeight: string, 
    maxWidth: string,
    maxHeight: string,
    activeHeight: string,
    backgroundColor: string, 
    backgroundHover: string,
    borderRadius: string,
    borderTop: string,
    borderBottom: string,
    borderLeft: string,
    borderRight: string,
    marginTop: string,
    marginBottom: string,
    marginLeft: string,
    marginRight: string,
    paddingTop: string,
    paddingBottom: string,
    paddingLeft: string,
    paddingRight: string,
    verticalAlign: "stretch" | "flex-start" | "flex-end" | "center" | "baseline",
    horizontalAlign: "center" | "flex-start" | "flex-end" | "space-between" | "space-around",
    direction: "column" | "row",
    fontSize: string,
    fontWeight: "normal" | "bold" | "bolder" | "lighter" | "number" | "initial" | "inherit",
    display: "flex" | "none" | "inline-block",
    overflowX: "visible" | "hidden" | "scroll" | "auto",
    overflowY: "visible" | "hidden" | "scroll" | "auto",
    color: string
}>`
    width: ${props => props.width};
    height: ${props => props.height};
    
    min-width: ${props => props.minWidth};
    min-height: ${props => props.minHeight};

    max-width: ${props => props.maxWidth};
    max-height: ${props => props.maxHeight};

    background-color: ${props => props.backgroundColor};
    &:hover { background-color: ${props => props.backgroundHover }; }

    border-radius: ${props => props.borderRadius };
    border-top: ${props => props.borderTop };
    border-bottom: ${props => props.borderBottom };
    border-left: ${props => props.borderLeft };
    border-right: ${props => props.borderRight };

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

    display: ${props => props.display};

    flex-direction: ${props => props.direction};
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};

    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};

    overflow-x: ${props => props.overflowX};
    overflow-y: ${props => props.overflowY};
`;

export default Component;