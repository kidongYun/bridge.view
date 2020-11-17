import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'

import Component, { ComponentProps, defaultProps } from './Component'

interface TextProps {
    component?: ComponentProps
    value?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextComponent: React.FC<TextProps> = ({
    component = defaultProps,
    value = "", 
    placeholder = "", 
    onChange = () => {} 
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
        <Container>
            <Form.Control
                defaultValue={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Container>
    </Component>

    return view;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export default TextComponent;