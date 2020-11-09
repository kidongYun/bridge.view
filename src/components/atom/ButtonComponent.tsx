import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'

interface ButtonProps {
    type:     
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

const ButtonComponent = ({ type, text, onClick }: ButtonProps) => {
    return <Button variant={type} onClick={onClick}>{text}</Button>
}

export default ButtonComponent;