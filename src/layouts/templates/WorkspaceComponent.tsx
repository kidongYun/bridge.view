import React from 'react';
import Component, { ComponentProps } from '../../components/atoms/Component';
import ObjectiveListComponent from '../../components/organisms/ObjectiveListComponent'

interface WorkspaceProps {
    component?: ComponentProps;
}

const WorkspaceComponent: React.FC<WorkspaceProps> = (props) => {
    let view =
    <Component width="80%">
        {props.children}
    </Component>

    return view;
}

export default WorkspaceComponent