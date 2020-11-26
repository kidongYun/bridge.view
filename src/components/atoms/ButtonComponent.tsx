import React from 'react'
import Button from 'react-bootstrap/Button'
import Component from '../templates/Component'

export interface ButtonProps {
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
    | 'outline-light'
    text: string
    onClick: () => void
}

const ButtonComponent: React.FC<ButtonProps> = (props) => {
    let view =
    <Component>
        <Button variant={props.theme} onClick={props.onClick}>
            {props.text}
        </Button>
    </Component>

    return view;
}

export default ButtonComponent;