import React from 'react'
import styled from 'styled-components'

import CellComponent from '../components/cell/CellComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility';

import useData from '../hooks/useData';
import PlanType from '../model/PlanType';
import DateType from '../model/DateType';
import ObjectiveType from '../model/ObjectiveType';
import { ObjectiveBuilder } from '../model/ObjectiveType';

const PlanController = () => {
    const { data_objectiveList, data_onSetObjectiveList, data_planList, data_onSetPlanList } = useData();

    React.useEffect(() => {
        data.getPlan(true).then((response) => {
            data_onSetPlanList(utility.parse(response.data.cells));
        })
    }, [])

    React.useEffect(() => {
        data.getObj(false).then((response) => {
            data_onSetObjectiveList(utility.parse(response.data.cells));
        })
    }, [])

    let view = 
    <Container>

        {data_planList.map(
            (plan) => {
                if(plan instanceof PlanType) {
                    let target: ObjectiveType = new ObjectiveBuilder().build();
                    data_objectiveList.map((temp) => {
                        const obj = temp as ObjectiveType;
                        if(obj.id === plan.objectiveId) {
                            target = obj;
                        }
                    })

                    return <CellComponent 
                        borderRadius="10px"
                        backgroundColor="#dc3545"
                        height="100px"
                        title={{ text: target.title, color: "#ffffff", verticalAlign: "", horizontalAlign: "" }}
                        contents={[]}
                    />
                }

                if(plan instanceof DateType && plan.type === "DATE") {
                    return <CellComponent
                        borderRadius="0px"
                        title={{ text: plan.getDate(), backgroundColor: "513674", verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
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

export default PlanController;