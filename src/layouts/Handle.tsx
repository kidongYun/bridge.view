import React from 'react';
import styled, { keyframes, css } from 'styled-components'

import HandleController from '../controller/HandleController'

const Handle = () => {
    let view = <HandleController/>

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