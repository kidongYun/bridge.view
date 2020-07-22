import React from 'react'
import styled from 'styled-components'

import Cell from '../../components/cell/Cell';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility';

import useData from '../../hooks/useData';
import PlanType from '../../model/PlanType';

const PlanTimeline = () => {
    const { planList, onSetPlanList } = useData();


    React.useEffect(() => {
        data.getPlan().then((response) => {
            onSetPlanList(utility.parse(response.data));
        })
    }, [])

    let view = 
    <Container>
        {planList.map(
            (plan) => {
                if(plan instanceof PlanType) {
                    return <Cell 
                        borderRadius="0px"
                        color="#00ff00"
                        height="100px"
                        header={{ text: plan.content, verticalAlign: "", horizontalAlign: "" }}
                        content={[]}
                        status={0}
                    />
                }
            }
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