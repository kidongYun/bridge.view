import React from 'react'
import Form from 'react-bootstrap/Form'

import OptionComponent, { OptionProps } from './OptionComponent'
import Component, { ComponentProps } from './Component'

interface SelectProps extends ComponentProps {
    value?: string
    options?: Array<OptionProps>
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectComponent: React.FC<SelectProps> = ({ 
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
    options, 
    onChange 
}) => {
    let optionView = <></>;

    if(options !== undefined) {
        optionView = 
        <>
            {options.map((option) => <OptionComponent title={option.title} value={option.value} /> )}
        </>;
    }

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
            <Form.Control as="select" defaultValue={value} onChange={onChange}>
                {optionView}
            </Form.Control>
        </Form.Group>
    </Component>

    return view;
}

export default SelectComponent;