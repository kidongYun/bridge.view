import React from 'react'
import styled from 'styled-components'

import Cell from '../../components/cell/Cell';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility';

import useData from '../../hooks/useData';
import PlanType from '../../model/PlanType';
import DateType from '../../model/DateType';
import ObjectiveType from '../../model/ObjectiveType';
import { ObjectiveBuilder } from '../../model/ObjectiveBuilder';

const PlanTimeline = () => {
    const { objectiveList, onSetObjectiveList, planList, onSetPlanList } = useData();


    React.useEffect(() => {
        data.getPlan().then((response) => {
            onSetPlanList(utility.parse(response.data));
        })
    }, [])

    React.useEffect(() => {
        data.getObj(false).then((response) => {
            onSetObjectiveList(utility.parse(response.data));
        })
    }, [])

    console.log(planList);
    console.log(objectiveList);

    let view = 
    <Container>
        {planList.map(
            (plan) => {
                if(plan instanceof PlanType) {
                    let target: ObjectiveType = new ObjectiveBuilder().build();
                    objectiveList.map((temp) => {
                        const obj = temp as ObjectiveType;
                        if(obj.getId() === plan.getObjectiveId()) {
                            target = obj;
                        }
                    })

                    return <Cell 
                        borderRadius="10px"
                        backgroundColor="#dc3545"
                        height="100px"
                        header={{ text: target.getTitle(), color: "#ffffff", verticalAlign: "", horizontalAlign: "" }}
                        contents={[]}
                        status={0}
                    />
                }

                if(plan instanceof DateType && plan.getType() === "DATE") {
                    return <Cell
                        borderRadius="0px"
                        header={{ text: plan.getDate(), backgroundColor: "513674", verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
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