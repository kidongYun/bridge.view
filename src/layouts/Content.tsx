import React from 'react'
import styled from 'styled-components'

import Workspace from './Workspace'
import Handle from './Handle'
import WorkspaceComponent from '../components/templates/WorkspaceComponent'
import ObjectiveListComponent from '../components/organisms/ObjectiveListComponent'
import PopupComponent from '../components/templates/PopupComponent'
import ObjectivePostComponent from '../components/organisms/ObjectivePostComponent'

const Content = () => {
    let view =
    <Container>
        <Frame>
            <WorkspaceComponent>
                <ObjectiveListComponent/>
            </WorkspaceComponent>
            <PopupComponent>
                <ObjectivePostComponent/>
            </PopupComponent>
            <Handle/>
        </Frame>
    </Container>

    return view;
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

const Frame = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export default Content;