import React from 'react'
import Component from '../templates/Component'
import ButtonComponent, { ButtonProps } from '../atoms/ButtonComponent';

interface NavigationProps {
    leftButtons: ButtonProps[]
    rightButtons: ButtonProps[]
}

const NavigationComponent: React.FC<NavigationProps> = ({
    leftButtons,
    rightButtons
}) => {
    let view =
    <Component backgroundColor="#24292e" backgroundHover="#24292e">
        <Component horizontalAlign="flex-start">
            {leftButtons.map((button) => {
                let view =
                <Component width="auto" height="auto" marginLeft="30px" marginRight="30px">
                    <ButtonComponent theme={button.theme} text={button.text} onClick={button.onClick} />
                </Component>

                return view;
            })}
        </Component>
        <Component horizontalAlign="flex-end">
            {rightButtons.map((button) => {
                let view =
                <Component width="auto" height="auto" marginLeft="30px" marginRight="30px">
                    <ButtonComponent theme={button.theme} text={button.text} onClick={button.onClick} />
                </Component>

                return view
            })}
        </Component>
    </Component>

    return view;
}

export default NavigationComponent;