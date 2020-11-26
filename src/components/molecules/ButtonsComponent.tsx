import React from 'react'
import Component, { ComponentProps, defaultProps } from '../templates/Component'
import ButtonComponent, { ButtonProps } from '../atoms/ButtonComponent'

export interface ButtonsProps {
    component?: ComponentProps
    buttons: ButtonProps[]
}

const ButtonsComponent: React.FC<ButtonsProps> = ({
    component = defaultProps,
    buttons
}) => {
    let view =
    <Component
        width={component.width}
        height={component.height}
        activeHeight={component.activeHeight}
        backgroundColor={component.backgroundColor}
        backgroundHover={component.backgroundHover}
        borderRadius={component.borderRadius}
        borderTop={component.borderTop}
        borderBottom={component.borderBottom}
        borderLeft={component.borderLeft}
        borderRight={component.borderRight}
        marginTop={component.marginTop}
        marginBottom={component.marginBottom}
        marginLeft={component.marginLeft}
        marginRight={component.marginRight}
        paddingTop={component.paddingTop}
        paddingBottom={component.paddingBottom}
        paddingLeft={component.paddingLeft}
        paddingRight={component.paddingRight}
        verticalAlign={component.verticalAlign}
        horizontalAlign={component.horizontalAlign}
        direction={component.direction}>
        {buttons.map((button) => {
            return <ButtonComponent theme={button.theme} text={button.text}/>
        })}
    </Component>

    return view;
}

export default ButtonsComponent