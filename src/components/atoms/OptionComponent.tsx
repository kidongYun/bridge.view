import React from 'react'

import Component, { ComponentProps } from './Component'

export interface OptionProps extends ComponentProps {
    title: string
    value: string
}

const OptionComponent: React.FC<OptionProps> = ({ 
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
    title, 
    value 
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
        <option value={value}>
            {title}
        </option>
    </Component>

    return view;
}

export default OptionComponent;