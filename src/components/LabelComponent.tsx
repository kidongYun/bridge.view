import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'

import Component, { ComponentProps } from './Component'

interface LabelProps extends ComponentProps {
    label: string
    labelSize?: string
    labelColor?: string
    labelWeight?: string
    verticalAlign?: string
    horizontalAlign?: string
}

const LabelComponent: React.FC<LabelProps> = ({ 
    width,
    height,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    backgroundColor,
    backgroundHover,
    onClick, 
    label,
    labelSize = "10pt",
    labelColor = "#000000",
    labelWeight = "normal",
    verticalAlign = "center",
    horizontalAlign = "center"
}) => {

    let view = 
    <Component width={width} height={height} backgroundColor={backgroundColor}>
        <Container labelSize={labelSize} labelColor={labelColor} labelWeight={labelWeight} verticalAlign={verticalAlign} horizontalAlign={horizontalAlign}>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
            </Form.Group>
        </Container>
    </Component>

    return view;
}

const Container = styled.div<{ labelSize: string, labelColor: string, labelWeight: string, verticalAlign: string, horizontalAlign: string }>`
    width: 100%;
    height: 100%;

    font-size: ${props => props.labelSize};
    font-weight: ${props => props.labelWeight};
    color: ${props => props.labelColor};

    display: flex;
    justify-content: ${props => props.horizontalAlign};
    align-items: ${props => props.verticalAlign};
`;

export default LabelComponent;