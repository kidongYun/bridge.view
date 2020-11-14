import React from 'react'
import styled from 'styled-components'
import Component, { ComponentProps, Default } from './Component'

export interface OptionProps {
    component?: ComponentProps
    title: string
    value: string
}

const OptionComponent: React.FC<OptionProps> = ({ 
    component = Default,
    title, 
    value
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
            verticalAlign={component.verticalAlign!}
            horizontalAlign={component.horizontalAlign!}>
            <option value={value}>
                {title}
            </option>
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

export default OptionComponent;