import React from 'react'
import styled from 'styled-components'

import * as data from '../../service/Data'

import usePlan from '../../hooks/usePlan';
import Cell from '../../components/cell/Cell';

const PlanTimeline = () => {
    const { planList, onGetPlan } = usePlan();


    React.useEffect(() => {
        data.getPlan().then((response) => {
            onGetPlan(response.data)
        })
    }, [])

    let view = 
    <Container>
        {planList.map(
            (plan) => 
                <Cell 
                    borderRadius="0px"
                    color="#00ff00"
                    height="100px"
                    header={{ text: plan.content, verticalAlign: "", horizontalAlign: "" }}
                    content={[]}
                    status={0}
                    onClick={undefined}
                />
        )}
    </Container>;
    return view;
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;

    margin: auto;
    overflow-y: auto;
`;

export default PlanTimeline;