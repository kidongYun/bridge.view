import React from 'react'
import Component, { ComponentProps } from '../../components/atoms/Component'

interface HeaderProps {
    component?: ComponentProps
}

const HeaderComponent: React.FC<HeaderProps> = (props) => {
    let view =
    <Component>
        {props.children}
    </Component>

    return view;
}

export default HeaderComponent