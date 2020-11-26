import React from 'react'
import Component from '../templates/Component'

interface PlanProps {
}

const PlanComponent: React.FC<PlanProps> = () => {
    let view =
    <Component>
    </Component>

    return view;
}

PlanComponent.defaultProps = {
    
}

export default PlanComponent;