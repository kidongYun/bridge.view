import React from 'react'
import Component, { ComponentProps } from '../../components/templates/Component'

import useTemplate, {} from '../../data/hooks/useTemplate'
import ObjectiveListComponent from '../../components/organisms/ObjectiveListComponent'

interface ObjectiveProps {
    component?: ComponentProps
}

const ObjectiveLayout: React.FC<ObjectiveProps> = (props) => {
    const { getTemplate } = useTemplate();

    let view = 
    <Component>
        <Component>

        </Component>
        <Component>
            <ObjectiveListComponent/>
        </Component>
    </Component>

    return view; 
}

export default ObjectiveLayout