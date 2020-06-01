import React from 'react'
import styled from 'styled-components'
import Cell from '../cell/Cell';

export interface _ObjectiveList {
    objectiveList: _Objective[];
}

export interface _Objective {
    id: number,
    title: string,
    description: string,
    priority: number,
    deadline: string
}

const Timeline = ({ objectiveList } : _ObjectiveList) => {

    return (
        <Container>
            {
                objectiveList.map(
                    (objective) => (
                        <Cell id={objective.id} title={objective.title} description={objective.description} priority={objective.priority} deadline={objective.deadline} />
                    )
                )
            }
        </Container>
    )
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;

    margin: auto;
    overflow-y: auto;
`

export default Timeline;