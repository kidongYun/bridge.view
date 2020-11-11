import React from 'react'
import styled from 'styled-components'

import CellComponent from '../components/LinearLayoutComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility';

import useHandle from '../hooks/useHandle';
import useData from '../hooks/useData';
import useCell from '../hooks/useCell';

import PlanType from '../model/PlanType';
import DateType from '../model/DateType';
import ObjectiveType from '../model/ObjectiveType';
import { ObjectiveBuilder } from '../model/ObjectiveType';
// import { TextProps } from '../components/props';

const PlanController = () => {
    // const { handle_onShow } = useHandle();

    // const { 
    //     data_objectiveList, 
    //     data_onSetObjectiveList, 
    //     data_planList, 
    //     data_onSetPlanList 
    // } = useData();

    // const {
    //     onSetCellStartDateTime,
    //     onSetSubjectId,
    //     onSetPlanObjectiveId,
    //     onSetPlanContent
    // } = useCell();

    // React.useEffect(() => {
    //     data.getPlan(true).then((response) => {
    //         data_onSetPlanList(utility.parse(response.data.data));
    //     })
    // }, [])

    // React.useEffect(() => {
    //     data.getObj(true).then((response) => {
    //         console.log(utility.parse(response.data));
    //         data_onSetObjectiveList(utility.parse(response.data.data));
    //     })
    // }, [])

    // let view = 
    // <Container>

    //     {data_planList.map(
    //         (plan) => {
    //             if(plan instanceof PlanType) {

    //                 console.log(plan);

    //                 /* 연결된 Objective 찾아서 target에 저장 */
    //                 let target: ObjectiveType = new ObjectiveBuilder().build();

                    
    //                 console.log("objective size : " + data_objectiveList.length);

    //                 data_objectiveList.map((temp) => {
    //                     const obj = temp as ObjectiveType;
    //                     if(obj.id === plan.objectiveId) {
    //                         target = obj;
    //                     }
    //                 });

    //                 let content: TextProps = (plan.content === null) ? { text: "내용을 입력하세요." } : { text : plan.content } 

    //                 console.log(target);

    //                 // return <CellComponent 
    //                 //     borderRadius="10px"
    //                 //     backgroundColor="#eeeeee"
    //                 //     backgroundHover="#e4e4e4"
    //                 //     height="150px"
    //                 //     title={{ text: target.title, verticalAlign: "", horizontalAlign: "" }}
    //                 //     contents={[
    //                 //         content
    //                 //     ]}
    //                 //     onClick={() => {
    //                 //         onSetCellStartDateTime(plan.startDateTime);
    //                 //         onSetSubjectId(plan.id);
    //                 //         onSetPlanObjectiveId(plan.objectiveId);
    //                 //         onSetPlanContent(plan.content);
    //                 //         handle_onShow("PLAN");
    //                 //     }}
    //                 // />
    //             }

    //             if(plan instanceof DateType && plan.type === "DATE") {
    //                 // return <CellComponent
    //                 //     borderRadius="0px"
    //                 //     title={{ text: plan.getDate().substring(0, 7), verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
    //                 // />
    //             }
    //         }
    //     )}
    // </Container>;
    return <></>;
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;

    margin: auto;
    overflow-y: auto;
`;

export default PlanController;