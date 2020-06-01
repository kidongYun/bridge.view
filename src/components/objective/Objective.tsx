import React, { useState } from 'react';
import styled from 'styled-components';
import Timeline from './timeline/Timeline';

import * as data from '../../service/data'
import { _Stage } from '../../App';

const Objective = ({ stage } : _Stage) => {
    let view;

    const objectiveList = data.postObjectiveList();

    if(stage === "Objective") {
        view = <Container><Timeline objectiveList={objectiveList}/></Container>
    } else {
        view = <></>
    }

    return (
        view
    );
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Objective;