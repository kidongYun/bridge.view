import React, { useState } from 'react';
import styled from 'styled-components';
import Timeline, { _CellList, _Cell } from './timeline/Timeline';

import * as data from '../../service/data'
import { _Stage } from '../../App';
import Cell from '../../model/Cell';

const Objective = ({ stage } : _Stage) => {
    let view;

    const cellList = data.postObjectiveList();

    cellList.push({
        id: 4,
        title: 'Its my new objective',
        description: 'des5',
        priority: 5,
        deadline: 'deadline5'
    })

    cellList.push(new Cell(4, 'hello123', 'desc323', 5,'deadline123123'));


    cellList.splice(0, 1);

    if(stage === "Objective") {
        view = <Container><Timeline cellList={cellList}/></Container>
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