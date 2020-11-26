import React from 'react'
import Component, { ComponentProps, defaultProps } from '../templates/Component'
import { ButtonProps } from '../atoms/ButtonComponent';
import ButtonsComponent from '../molecules/ButtonsComponent'

interface NavigationProps {
    component?: ComponentProps
    leftButtons: ButtonProps[]
    rightButtons: ButtonProps[]
}

const NavigationComponent: React.FC<NavigationProps> = (props) => {
    let view =
    <Component backgroundColor="#24292e">
        <ButtonsComponent buttons={props.leftButtons} component={{
            horizontalAlign: "left"
        }}/>
        <ButtonsComponent buttons={props.rightButtons}/>
    </Component>

    return view;
}

export default NavigationComponent;