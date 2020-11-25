import React from 'react'
import Component, { ComponentProps } from '../templates/Component'

interface PlanProps {
    component?: ComponentProps
}

const PlanComponent: React.FC<PlanProps> = () => {
    let view =
    <Component></Component>

    return view;
}

export default PlanComponent;