import React from 'react'
import styled from 'styled-components'
import { _Stage } from '../../App';

const Todo = ({ stage }: _Stage) => {
    let view;

    if(stage === "Todo") {
        view = <Container>Todo</Container>
    } else {
        view = <></>
    }

    return (
        view
    )
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Todo;