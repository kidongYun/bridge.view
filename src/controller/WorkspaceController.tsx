import React from 'react'
import styled from 'styled-components'

import useStage from '../hooks/useStage'

import ObjectiveController from './ObjectiveController';
import PlanController from './PlanController';
import TodoController from './TodoController';

import ObjectiveListComponent from '../components/organisms/ObjectiveListComponent'
import SignComponent from '../components/organisms/SignComponent'
import ObjectivePostComponent from '../components/organisms/ObjectivePostComponent'
import TestComponent from '../components/organisms/TestComponent';

const WorkspaceController = () => {
    const { name } = useStage();

    let view = <Container></Container>;

    if(name === "OBJECTIVE") {
        view = <Container><TestComponent/></Container>;
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