import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import ContainerComponent from '../templates/ContainerComponent'

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

const ButtonComponent: React.FC<ButtonProps> = ({
    theme, 
    text,
    onClick
}) => {
    let view =
    <ContainerComponent>
        <Button variant={theme} onClick={onClick}>
            {text}
        </Button>
    </ContainerComponent>

    return view;
}

export default ButtonComponent;