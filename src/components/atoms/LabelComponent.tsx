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
    activeHeight,
    backgroundColor,
    backgroundHover,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    direction,
    onClick, 
    label,
    labelSize = "10pt",
    labelColor = "#000000",
    labelWeight = "normal",
    verticalAlign = "center",
    horizontalAlign = "center"
}) => {

    let view = 
    <Component 
        width={width} 
        height={height}
        activeHeight={activeHeight!}
        backgroundColor={backgroundColor} 
        backgroundHover={backgroundHover}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        direction={direction}
        onClick={onClick}>
        <Container 
            labelSize={labelSize} 
            labelColor={labelColor} 
            labelWeight={labelWeight} 
            verticalAlign={verticalAlign} 
            horizontalAlign={horizontalAlign}>
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