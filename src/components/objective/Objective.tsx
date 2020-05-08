import React, { useState } from 'react';
import styled from 'styled-components';
import Timeline from './timeline/Timeline';

import * as service from '../../service/objective'

interface _Visible {
    visible: boolean
}

const Objective = ({visible}: _Visible) => {
    let view;

    const [cellList, postCellList] = React.useState([
        {
            id: 1,
            title: 'title1',
            description: 'des1',
            priority: 1,
            deadline: 'deadline1'
        },
        {
            id: 2,
            title: 'title2',
            description: 'des2',
            priority: 2,
            deadline: 'deadline2'
        },
        {
            id: 3,
            title: 'title3',
            description: 'des3',
            priority: 3,
            deadline: 'deadline3'
        }
    ]);

    if(visible) {
        view = <Container><Timeline cellList={cellList}/></Container>
    } else {
        view = <Container></Container>
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