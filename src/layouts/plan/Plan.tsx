import React from 'react'
import styled from 'styled-components'

import useStage from '../../hooks/useStage';
import PlanTimeline from './PlanTimeline';

const Plan = () => {
    let view = <></>

    const { name } = useStage();

    if(name !== "PLAN") {
        return(view)
    }

    view = 
    <Container>
        <PlanTimeline/>
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

export default Plan;