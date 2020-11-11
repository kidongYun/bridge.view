import React from 'react'

import Component, { ComponentProps } from './Component'

export interface OptionProps extends ComponentProps {
    title: string
    value: string
}

const OptionComponent: React.FC<OptionProps> = ({ 
    width,
    height,
    borderRadius,
    borderColor,
    borderWidth,
    borderStyle,
    backgroundColor,
    backgroundHover,
    onClick, 
    title, 
    value 
}) => {
    let view =
    <Component>
        <option value={value}>
            {title}
        </option>
    </Component>

    return view;
}

export default OptionComponent;