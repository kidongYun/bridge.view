import React from 'react'
import styled from 'styled-components'

import useStage from '../../hooks/useStage';
import PlanController from '../../controller/PlanController';

const Plan = () => {
    let view = <></>

    const { name } = useStage();

    if(name !== "PLAN") {
        return(view)
    }

    view = 
    <Container>
        <PlanController/>
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