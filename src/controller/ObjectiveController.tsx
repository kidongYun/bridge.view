import React from 'react'
import styled from 'styled-components'

import LinearLayoutComponent from '../components/LinearLayoutComponent';
import ObjectiveType from '../model/ObjectiveType';
import DateType from '../model/DateType';

import * as data from '../service/Data'
import * as utility from '../service/Utility'

import useHandle from '../hooks/useHandle';
import useData from '../hooks/useData';
import useCell from '../hooks/useCell';

import SelectComponent from '../components/SelectComponent';
import OptionComponent from '../components/OptionComponent';
import ButtonComponent from '../components/ButtonComponent';
import TextComponent from '../components/TextComponent';
import LabelComponent from '../components/LabelComponent';
import Component from '../components/Component'


const ObjectiveController = () => {
    const { handle_onShow } = useHandle();
    
    const { 
        data_objectiveList, 
        data_onSetObjectiveList 
    } = useData();

    const { 
        onSetCellType,
        onSetCellEndDateTime,
        onSetSubjectId,
        onSetObjectiveTitle,
        onSetObjectiveDescription
     } = useCell();
    // const { subject_onDelete, subject_onUpdate } = useSubject();

    React.useEffect(() => {
        data.getObj(true).then((response) => {
            data_onSetObjectiveList(utility.parse(response.data.data));
        });
    }, []);

    let view = 
    <Container>
        <LinearLayoutComponent
            graph={[
                [
                    <Component backgroundColor="#111111"></Component>,
                    <LabelComponent label="HELL12" backgroundColor="#222222"></LabelComponent>
                ],
                [
                    <LabelComponent label="HELL21" backgroundColor="#333333"></LabelComponent>,
                    <LabelComponent label="HELL22" backgroundColor="#444444"></LabelComponent>,
                    <LabelComponent label="HELL23" backgroundColor="#555555"></LabelComponent>
                ]
            ]}
        />
        
        {/* <CellComponent
            borderRadius="10px"
            backgroundColor="#007bff"
            backgroundHover="#0069d9"
            height="100px"
            title={{ text: "+", fontSize: "20pt", color: "#ffffff", verticalAlign: "center", horizontalAlign: "center" }}
            onClick={() => { handle_onShow("OBJECTIVE_POST"); }}
        /> */}

        {/* {data_objectiveList.map((obj) => {
            if(obj instanceof ObjectiveType && obj.type === "OBJECTIVE") {
                return <CellComponent
                borderRadius="10px"
                backgroundColor="#eeeeee"
                backgroundHover="#e4e4e4"
                height="250px"
                title={{ text: obj.title, fontSize: "13pt", verticalAlign: "center", horizontalAlign: "center" }}
                contents={[
                    { text: obj.description, borderRadius: "10px", backgroundColor: "#ffffff", verticalAlign: "center", horizontalAlign: "center" },
                    { text: obj.getDate(), borderRadius: "10px", backgroundColor: "#ffffff", verticalAlign: "center", horizontalAlign: "flex-start" },
                ]}
                onClick={() => {
                    onSetCellType(obj.type);
                    onSetCellEndDateTime(obj.endDateTime);
                    onSetSubjectId(obj.id);
                    onSetObjectiveTitle(obj.title);
                    onSetObjectiveDescription(obj.description);
                    handle_onShow("OBJECTIVE_PUT"); 
                }}/>
            }

            if(obj instanceof DateType && obj.type === "DATE") {
                return <CellComponent
                    borderRadius="0px"
                    title={{ text: obj.getDate(), backgroundColor: "513674", verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
                />
            }
        })} */}
    </Container>

    return view;
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;

    margin: auto;
    overflow-y: auto;
`

export default ObjectiveController;