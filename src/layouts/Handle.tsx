import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components'

import HandleController from '../controller/HandleController'

const Handle = () => {
    const [status, setStatus] = useState("CLOSE");

    let view = 
    <Container status={status}>
        <HandleController setStatus={(status) => setStatus(status)}/>
    </Container>

    return view;
}

const Container = styled.div<{ status: string }>`
    display: flex;
    width: 0%;
    height: 100%;

    ${(props) => { 
        if(props.status === "OPEN") {
            return css`
                animation: ${openAnim} 0.3s linear; 
                width: 50%;
            `
        }

        if(props.status === "CLOSE") {
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