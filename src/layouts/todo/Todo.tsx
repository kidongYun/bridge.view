import React from 'react'
import styled from 'styled-components'

import useStage from '../../hooks/useStage'

const Todo = () => {
    let view = <></>

    const { name } = useStage();

    if(name !== "TODO") {
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