import React from 'react'
import styled from 'styled-components'

import useStage from '../../hooks/useStage'
import ObjectiveTimeline from '../../controller/ObjectiveController';

const Objective = () => {
    let view = <></>;

    const { name } = useStage();

    if(name !== "OBJECTIVE") {
        return (view)
    }

    view = 
    <Container>
        <ObjectiveTimeline/>
    </Container>

    return (view);
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Objective;