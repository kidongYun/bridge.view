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
    theme, 
    text, 
    onClick 
}) => {
    let view =
    <Component width={width} height={height}>
        <Button variant={theme} onClick={onClick}>{text}</Button>
    </Component>

    return view;
}

export default ButtonComponent;