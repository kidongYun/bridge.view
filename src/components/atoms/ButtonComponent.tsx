import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Component, { ComponentProps, Default } from './Component'

export interface ButtonProps {
    component?: ComponentProps
    theme?:     
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';
    text?: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ 
    component = Default,
    theme = "primary", 
    text = ""
}) => {
    let view =
    <Component 
        width={component.width} 
        height={component.height}
        activeHeight={component.activeHeight}
        backgroundColor={component.backgroundColor} 
        backgroundHover={component.backgroundHover}
        borderRadius={component.borderRadius}
        border={component.border}
        marginTop={component.marginTop}
        marginBottom={component.marginBottom}
        marginLeft={component.marginLeft}
        marginRight={component.marginRight}
        paddingTop={component.paddingTop}
        paddingBottom={component.paddingBottom}
        paddingLeft={component.paddingLeft}
        paddingRight={component.paddingRight}
        direction={component.direction}>
        <Container 
            verticalAlign={component.verticalAlign!}
            horizontalAlign={component.horizontalAlign!}>
            <Button variant={theme} onClick={component.onClick}>
                {text}
            </Button>
        </Container>
    </Component>

    return view;
}

const Container = styled.div<{ 
    verticalAlign: string, 
    horizontalAlign: string 
}>`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
`;

export default ButtonComponent;