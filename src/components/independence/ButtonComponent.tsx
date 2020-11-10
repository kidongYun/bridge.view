import React from 'react'
import Button from 'react-bootstrap/Button'

import Component from './Component'

export interface ButtonProps extends Component {
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
    onClick: (params?: any) => void
}

const ButtonComponent = ({ theme, text, onClick }: ButtonProps) => {
    return <Button variant={theme} onClick={onClick}>{text}</Button>
}

export default ButtonComponent;