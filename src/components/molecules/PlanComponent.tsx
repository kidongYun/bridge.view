import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'

interface PlanProps {
    component?: ComponentProps
}

const PlanComponent: React.FC<PlanProps> = () => {
    let view =
    <Component></Component>

    return view;
}

export default PlanComponent;