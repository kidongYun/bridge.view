import React from 'react';
import styled from 'styled-components';
import Timeline from './timeline/Timeline';

import * as data from '../../service/data'
import CellType from '../../model/CellType';

interface ObjectiveProps {
    stage: string
}

const Objective = ({ stage } : ObjectiveProps) => {
    let view;

    const [cellList, setCellList] = React.useState<CellType[]>(data.cellList);

    cellList.push(new CellType(1, 'a', 'b', 2, 'c'));
    // setCellList(cellList);

    if(stage === "Objective") {
        view = <Container><Timeline cellList={cellList} /></Container>
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