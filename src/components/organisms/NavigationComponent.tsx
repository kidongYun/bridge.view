import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'
import { ButtonProps } from '../atoms/ButtonComponent';
import ButtonsComponent from '../molecules/ButtonsComponent'

interface NavigationProps {
    component?: ComponentProps
    leftButtons: ButtonProps[]
    rightButtons: ButtonProps[]
}

const NavigationComponent: React.FC<NavigationProps> = (props) => {
    let view =
    <Component>
        <ButtonsComponent buttons={props.leftButtons}/>
        <ButtonsComponent buttons={props.rightButtons}/>
    </Component>

    return view;
}

export default NavigationComponent;