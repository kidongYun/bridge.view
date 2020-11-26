import React from 'react'
import styled from 'styled-components'
import { Root } from '../Root'

export interface ComponentProps {
    width?: string,
    minWidth?: string,
    height?: string,
    minHeight?: string,
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
    verticalAlign?: string,
    horizontalAlign?: string,
    direction?: string,
    onClick?: () => void
}

export const defaultProps: ComponentProps = {
    width: "100%",
    minWidth: "100%",
    height: "100%",
    minHeight: "100%",
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
    onClick: () => {},
}

const Component: React.FC<ComponentProps> = (props) => {

    let view =
    <Container 
        width={props.width!} 
        minWidth={props.minWidth!}
        height={props.height!}
        minHeight={props.minHeight!}
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
        onClick={props.onClick!}>
        {props.children!}
    </Container>

    return view;
}

Component.defaultProps = defaultProps;

const Container = styled(Root)<{ 
    width: string,
    minWidth: string,
    height: string,
    minHeight: string, 
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
    verticalAlign: string,
    horizontalAlign: string,
    direction: string
}>`
    width: ${props => props.width};
    height: ${props => props.height};
    
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

    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
`;

export default Component;