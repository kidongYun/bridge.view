import React from 'react'
import styled from 'styled-components'

import CellComponent from '../components/cell/CellComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility';

import useModal from '../hooks/useModal';
import useData from '../hooks/useData';
import useCell from '../hooks/useCell';

import PlanType from '../model/PlanType';
import DateType from '../model/DateType';
import ObjectiveType from '../model/ObjectiveType';
import { ObjectiveBuilder } from '../model/ObjectiveType';

const PlanController = () => {
    const { modal_onShow } = useModal();

    const { 
        data_objectiveList, 
        data_onSetObjectiveList, 
        data_planList, 
        data_onSetPlanList 
    } = useData();

    const {
        onSetCellDateTime,
        onSetSubjectId,
        onSetPlanObjectiveId,
        onSetPlanContent
    } = useCell();

    React.useEffect(() => {
        data.getPlan(true).then((response) => {
            data_onSetPlanList(utility.parse(response.data.data));
        })
    }, [])

    React.useEffect(() => {
        data.getObj(false).then((response) => {
            data_onSetObjectiveList(utility.parse(response.data.data));
        })
    }, [])

    let view = 
    <Container>

        {data_planList.map(
            (plan) => {
                if(plan instanceof PlanType) {

                    console.log(plan);

                    /* 연결된 Objective 찾아서 target에 저장 */
                    let target: ObjectiveType = new ObjectiveBuilder().build();

                    console.log("objective size : " + data_objectiveList.length);

                    data_objectiveList.map((temp) => {
                        const obj = temp as ObjectiveType;
                        if(obj.id === plan.objectiveId) {
                            target = obj;
                        }
                    });

                    console.log(target);

                    return <CellComponent 
                        borderRadius="10px"
                        backgroundColor="#eeeeee"
                        backgroundHover="#e4e4e4"
                        height="150px"
                        title={{ text: target.title, verticalAlign: "", horizontalAlign: "" }}
                        contents={[
                            { text: plan.content }
                        ]}
                        onClick={() => {
                            onSetCellDateTime(plan.dateTime);
                            onSetSubjectId(plan.id);
                            onSetPlanObjectiveId(plan.objectiveId);
                            onSetPlanContent(plan.content);
                            modal_onShow("PLAN");
                        }}
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