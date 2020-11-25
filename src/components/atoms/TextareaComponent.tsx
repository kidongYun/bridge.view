import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Component, { ComponentProps, defaultProps } from '../templates/Component'

interface TextareaProps {
    component?: ComponentProps
    value?: string
    placeholder?: string
    rows?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComponent: React.FC<TextareaProps> = ({ 
    component = defaultProps,
    value = "", 
    placeholder = "", 
    rows = "10", 
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
                as="textarea"
                rows={rows}
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

export default TextareaComponent;