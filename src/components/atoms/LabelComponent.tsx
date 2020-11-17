import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Component, { ComponentProps, defaultProps } from './Component'

interface LabelProps {
    component?: ComponentProps
    label: string
    size?: string
    color?: string
    weight?: string
}

const LabelComponent: React.FC<LabelProps> = ({
    component = defaultProps,
    label,
    size = "10pt",
    color = "#000000",
    weight = "normal",                                   
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
        direction={component.direction}
        onClick={component.onClick}>
        <Container 
            size={size} 
            color={color} 
            weight={weight}>
            <Form.Label>{label}</Form.Label>
        </Container>
    </Component>

    return view;
}

const Container = styled.div<{ 
    size: string, 
    color: string, 
    weight: string
}>`
    width: auto;
    height: auto;

    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    color: ${props => props.color};
`;

export default LabelComponent;