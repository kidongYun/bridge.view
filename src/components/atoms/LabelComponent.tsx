import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'

import Component, { ComponentProps, Default } from './Component'

interface LabelProps {
    component?: ComponentProps
    label: string
    size?: string
    color?: string
    weight?: string
}

const LabelComponent: React.FC<LabelProps> = ({ 
    component = Default,
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
        borderColor={component.borderColor}
        borderWidth={component.borderWidth}
        borderStyle={component.borderStyle}
        marginTop={component.marginTop}
        marginBottom={component.marginBottom}
        marginLeft={component.marginLeft}
        marginRight={component.marginRight}
        paddingTop={component.paddingTop}
        paddingBottom={component.paddingBottom}
        paddingLeft={component.paddingLeft}
        paddingRight={component.paddingRight}
        direction={component.direction}
        onClick={component.onClick}>
        <Container 
            size={size} 
            color={color} 
            weight={weight}
            verticalAlign={component.verticalAlign!}
            horizontalAlign={component.horizontalAlign!}>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
            </Form.Group>
        </Container>
    </Component>

    return view;
}

const Container = styled.div<{ 
    size: string, 
    color: string, 
    weight: string,
    horizontalAlign: string,
    verticalAlign: string
}>`
    width: 100%;
    height: 100%;

    font-size: ${props => props.size};
    font-weight: ${props => props.color};
    color: ${props => props.weight};

    display: flex;
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
`;

export default LabelComponent;