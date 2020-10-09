import React from 'react'
import styled from 'styled-components'

import HandleComponent from '../components/handle/PopinHandleComponent'

import HandleController from '../controller/HandleController'

const Handle = () => {
    let view = 
    <Container>
        <HandleController/>
    </Container>

    return view;
}

const Container = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
`;

export default Handle;