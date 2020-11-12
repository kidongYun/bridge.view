import React from 'react'
import Form from 'react-bootstrap/Form'

import Component, { ComponentProps } from './Component'

interface TextareaProps extends ComponentProps {
    value?: string
    placeholder?: string
    rows?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextareaComponent: React.FC<TextareaProps> = ({ 
    width,
    height,
    activeHeight,
    backgroundColor,
    backgroundHover,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    marginHorizon,
    marginVertical,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingHorizon,
    paddingVertical,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    direction,
    onClick, 
    value, 
    placeholder, 
    rows, 
    onChange 
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
        marginHorizon={marginHorizon}
        marginVertical={marginVertical}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        marginRight={marginRight}
        paddingHorizon={paddingHorizon}
        paddingVertical={paddingVertical}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        direction={direction}
        onClick={onClick}>
        <Form.Group>
            <Form.Control
                defaultValue={value}
                placeholder={placeholder}
                as="textarea"
                rows={rows}
                onChange={onChange}
            />
        </Form.Group>
    </Component>

    return view;
}

export default TextareaComponent;