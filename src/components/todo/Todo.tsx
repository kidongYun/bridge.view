import React from 'react'
import styled from 'styled-components'

interface _Visible {
    visible: boolean
}

const Todo = ({visible}: _Visible) => {
    let view;

    if(visible) {
        view = <Container>Todo</Container>
    } else {
        view = <Container></Container>
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