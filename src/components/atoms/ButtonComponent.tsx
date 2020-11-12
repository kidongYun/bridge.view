import React from 'react'
import Button from 'react-bootstrap/Button'

import Component, { ComponentProps } from './Component'

export interface ButtonProps extends ComponentProps {
    theme:     
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';
    text: string
}

const ButtonComponent: React.FC<ButtonProps> = ({ 
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
    theme, 
    text
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
        direction={direction}>
        <Button variant={theme} onClick={onClick}>
            {text}
        </Button>
    </Component>

    return view;
}

export default ButtonComponent;