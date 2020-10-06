import React from 'react'
import styled from 'styled-components'

import Workspace from './Workspace'
import Handle from './Handle'

const Content = () => {
    let view =
    <Container>
        <Frame>
            <Workspace/>
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

    background-color: #123123;
`;

const Frame = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export default Content;