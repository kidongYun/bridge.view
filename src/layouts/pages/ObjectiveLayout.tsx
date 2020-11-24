import React from 'react'
import Component, { ComponentProps } from '../../components/atoms/Component'

import useTemplate, {} from '../../data/hooks/useTemplate'
import WorkspaceComponent from '../templates/WorkspaceComponent';

import ObjectiveListComponent from '../../components/organisms/ObjectiveListComponent'

interface ObjectiveProps {
    component?: ComponentProps
}

const ObjectiveLayout: React.FC<ObjectiveProps> = (props) => {
    const { getTemplate } = useTemplate();

    let view = 
    <Component>
        <WorkspaceComponent>
            <ObjectiveListComponent/>
        </WorkspaceComponent>
    </Component>

    return view; 
}

export default ObjectiveLayout