import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Component, { ComponentProps, Default } from './Component'

interface SelectProps {
    component?: ComponentProps
    value?: string
    options?: Array<{ value: string, title: string }>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent: React.FC<SelectProps> = ({ 
    component = Default,
    value = "", 
    options = [], 
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
            <Form.Group>
                <Form.Control as="select" defaultValue={value} onChange={onChange}>
                    {optionView}
                </Form.Control>
            </Form.Group>
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

export default SelectComponent;