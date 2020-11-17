import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import Component, { ComponentProps, defaultProps } from './Component'

export interface ButtonProps {
    component?: ComponentProps
    theme:     
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
    text: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ 
    component = defaultProps,
    theme, 
    text,
}) => {
    let view =
    <Component
        width={component.width}
        height={component.height}
        activeHeight={component.activeHeight}
        backgroundColor={component.backgroundColor}
        backgroundHover={component.backgroundHover}
        borderRadius={component.borderRadius}
        borderTop={component.borderTop}
        borderBottom={component.borderBottom}
        borderLeft={component.borderLeft}
        borderRight={component.borderRight}
        marginTop={component.marginTop}
        marginBottom={component.marginBottom}
        marginLeft={component.marginLeft}
        marginRight={component.marginRight}
        paddingTop={component.paddingTop}
        paddingBottom={component.paddingBottom}
        paddingLeft={component.paddingLeft}
        paddingRight={component.paddingRight}
        verticalAlign={component.verticalAlign}
        horizontalAlign={component.horizontalAlign}
        direction={component.direction}>
        <Container>
            <Button variant={theme} onClick={component.onClick}>
                {text}
            </Button>
        </Container>
    </Component>

    return view;
}

const Container = styled.div`
    width: auto;
    height: auto;
`;

export default ButtonComponent;