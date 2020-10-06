import React from 'react'
import styled from 'styled-components'

import WorkspaceController from '../controller/WorkspaceController';

const Workspace = () => {
    let view =
    <Container>
        <WorkspaceController/>
    </Container>

    return view;
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    margin: auto;
    padding: auto;
`;

export default Workspace;