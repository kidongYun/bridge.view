import React from 'react'
import styled from 'styled-components'
import { Root } from '../Root'
import Button from 'react-bootstrap/Button'

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
    <Container>
        <Button variant={theme} onClick={onClick}>
            {text}
        </Button>
    </Container>

    return view;
}

const Container = styled(Root)``;

export default ButtonComponent;