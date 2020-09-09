import React from 'react'
import styled from 'styled-components'

import Cell from '../../components/cell/Cell';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility';

import useData from '../../hooks/useData';
import PlanType from '../../model/PlanType';
import DateType from '../../model/DateType';

const PlanTimeline = () => {
    const { planList, onSetPlanList } = useData();


    React.useEffect(() => {
        data.getPlan().then((response) => {
            onSetPlanList(utility.parse(response.data));
        })
    }, [])

    console.log(planList);

    let view = 
    <Container>
        {planList.map(
            (plan) => {
                if(plan instanceof PlanType) {
                    return <Cell 
                        borderRadius="10px"
                        backgroundColor="#dc3545"
                        height="100px"
                        header={{ text: plan.content, color: "#ffffff", verticalAlign: "", horizontalAlign: "" }}
                        contents={[]}
                        status={0}
                    />
                }

                if(plan instanceof DateType && plan.getType() === "DATE") {
                    return <Cell
                        borderRadius="0px"
                        header={{ text: plan.getDateTime(), backgroundColor: "513674", verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
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