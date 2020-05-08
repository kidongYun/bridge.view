import React from 'react';
import styled from 'styled-components';
import Timeline from './timeline/Timeline';

import * as service from '../../service/objective'

export interface ObjectiveModel {
    cellList: _Cell[];
}

export interface _Cell {
    id: number,
    title: string,
    description: string,
    priority: number,
    deadline: string
}

class Objective extends React.Component<{}, ObjectiveModel> {

    constructor(props: {}) {
        super(props);

        this.state = {
            cellList: []
        }
    }

    componentDidMount() {
        this.postObjective();
    }

    postObjective = async () => {
        const response = await service.postObjective();

        this.setState({
            cellList: response.data as _Cell[]
        });
   }

    render() {
        const {cellList}: ObjectiveModel = this.state;
        
        return(
            <Container>
                <Timeline cellList={cellList} />
            </Container>
        )
    }
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Objective;