import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Component, { ComponentProps, defaultProps } from './Component'

interface SelectProps {
    component?: ComponentProps
    value?: string
    options: Array<{ value: string, title: string }>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent: React.FC<SelectProps> = ({ 
    component = defaultProps,
    value = "", 
    options, 
    onChange = () => {}
}) => {
    let optionView = <></>;

    if(options !== undefined) {
        optionView = 
        <>
            {options.map((option) => <option value={option.value}>{option.title}</option> )}
        </>;
    }

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
        verticalAlign={component.verticalAlign}
        horizontalAlign={component.horizontalAlign}
        direction={component.direction}
        onClick={component.onClick}>
        <Container>
            <Form.Control as="select" defaultValue={value} onChange={onChange}>
                {optionView}
            </Form.Control>
        </Container>
    </Component>

    return view;
}

const Container = styled.div`
    width: auto;
    height: auto;
`;

export default SelectComponent;