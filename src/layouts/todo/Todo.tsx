import React from 'react'
import styled from 'styled-components'

interface TodoProps {
    stage: string
}

const Todo = ({ stage }: TodoProps) => {
    let view = <></>

    if(stage !== "Todo") {
        return (view)
    }

    view = 
    <Container>
        Todo
    </Container>

    return (view)
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Todo;