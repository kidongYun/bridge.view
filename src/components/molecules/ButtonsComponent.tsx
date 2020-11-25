import React from 'react'
import Component, { ComponentProps } from '../templates/Component'
import ButtonComponent, { ButtonProps } from '../atoms/ButtonComponent'

export interface ButtonsProps {
    component?: ComponentProps
    buttons: ButtonProps[]
}

const ButtonsComponent: React.FC<ButtonsProps> = (props) => {
    let view =
    <Component>
        {props.buttons.map((button) => {
            return <ButtonComponent theme={button.theme} text={button.text}/>
        })}
    </Component>

    return view;
}

export default ButtonsComponent