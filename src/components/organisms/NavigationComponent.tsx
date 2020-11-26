import React from 'react'
import Component, { ComponentProps, defaultProps } from '../templates/Component'
import ButtonComponent, { ButtonProps } from '../atoms/ButtonComponent';

interface NavigationProps {
    component?: ComponentProps
    leftButtons: ButtonProps[]
    rightButtons: ButtonProps[]
}

const NavigationComponent: React.FC<NavigationProps> = ({
    component = defaultProps,
    leftButtons,
    rightButtons
}) => {
    let view =
    <Component backgroundColor="#24292e" backgroundHover="#24292e">
        <Component horizontalAlign="flex-start">
            {leftButtons.map((button) => {
                return <ButtonComponent theme={button.theme} text={button.text} onClick={button.onClick} />
            })}
        </Component>
        <Component horizontalAlign="flex-end">
            {rightButtons.map((button) => {
                return <ButtonComponent theme={button.theme} text={button.text} onClick={button.onClick} />
            })}
        </Component>
    </Component>

    return view;
}

export default NavigationComponent;