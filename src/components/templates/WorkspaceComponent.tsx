import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'
import ObjectiveListComponent from '../organisms/ObjectiveListComponent';

interface WorkspaceProps {
    component?: ComponentProps;
}

const WorkspaceComponent: React.FC<WorkspaceProps> = (props) => {
    let view =
    <Component>
        {props.children}
    </Component>

    return view;
}

export default WorkspaceComponent