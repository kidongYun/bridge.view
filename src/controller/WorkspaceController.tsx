import React from 'react'
import styled from 'styled-components'

import useStage from '../hooks/useStage'

import ObjectiveController from './ObjectiveController';
import PlanController from './PlanController';
import TodoController from './TodoController';

const WorkspaceController = () => {
    const { name } = useStage();

    let view = <Container></Container>;

    if(name === "OBJECTIVE") {
        view = <Container><ObjectiveController/></Container>;
    }

    if(name === "PLAN") {
        view = <Container><PlanController/></Container>;
    }

    if(name == "TODO") {
        view = <Container><TodoController/></Container>;
    }

    return view;
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export default WorkspaceController;