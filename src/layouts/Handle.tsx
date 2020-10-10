import React from 'react';
import styled, { keyframes, css } from 'styled-components'

import useHandle from '../hooks/useHandle'

import HandleController from '../controller/HandleController'

const Handle = () => {
    const { handle_type, handle_visible } = useHandle();

    let view = 
    <Container type={handle_type} visible={handle_visible}>
        <HandleController/>
    </Container>

    return view;
}

const Container = styled.div<{ type: string, visible: boolean }>`
    display: flex;
    width: 0%;
    height: 100%;

    ${(props) => { 
        if(props.type !== "POPIN") {
            return;
        }

        if(props.visible) {
            return css`
                animation: ${openAnim} 0.3s linear; 
                width: 50%;
            `
        } else {
            return css`
                animation: ${closeAnim} 0.3s linear;
                width: 0%;
            `
        }
    }}
`;

const openAnim = keyframes`
    0% {
        width: 0%;
    }

    100% {
        width: 50%;
    }
`;

const closeAnim = keyframes`
    0% {
        width: 50%;
    }

    100% {
        width: 0%;
    }
`;

export default Handle;