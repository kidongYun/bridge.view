import React from 'react'
import styled from 'styled-components'

import CellComponent from '../components/cell/CellComponent';
import ObjectiveType from '../model/ObjectiveType';
import DateType from '../model/DateType';

import * as data from '../service/Data'
import * as utility from '../service/Utility'

import useModal from '../hooks/useModal';
import useData from '../hooks/useData';
import useCell from '../hooks/useCell';


const ObjectiveController = () => {
    const { modal_onShow } = useModal();
    const { data_objectiveList, data_onSetObjectiveList } = useData();
    const { 
        onSetCellType,
        onSetCellDateTime,
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

    console.log(data_objectiveList);

    let view = 
    <Container>
        <CellComponent
            borderRadius="10px"
            backgroundColor="#007bff"
            backgroundHover="#0069d9"
            height="100px"
            title={{ text: "+", fontSize: "20pt", color: "#ffffff", verticalAlign: "center", horizontalAlign: "center" }}
            onClick={() => { modal_onShow("OBJECTIVE_POST"); }}
        />

        {data_objectiveList.map(
            (obj) => {
                if(obj instanceof ObjectiveType && obj.type === "OBJECTIVE") {
                    if(obj.display === "NORMAL") {
                        return <CellComponent
                            borderRadius="10px"
                            backgroundColor="#eeeeee"
                            backgroundHover="#e4e4e4"
                            height="100px"
                            title={{ text: obj.title, fontSize: "13pt", verticalAlign: "center", horizontalAlign: "center" }}
                            onClick={() => {
                                obj.display = "DETAIL";
                                data_onSetObjectiveList([
                                    ...data_objectiveList
                                ])
                            }}
                        />
                    }

                    if(obj.display === "DETAIL") {
                        return <CellComponent
                            borderRadius="10px"
                            backgroundColor="#eeeeee"
                            backgroundHover="#e4e4e4"
                            height="300px"
                            title={{ text: obj.title, fontSize: "13pt", verticalAlign: "center", horizontalAlign: "center" }}
                            contents={[
                                { text: obj.description, borderRadius: "10px", backgroundColor: "#ffffff", verticalAlign: "center", horizontalAlign: "center" },
                                { text: obj.getDate(), borderRadius: "10px", backgroundColor: "#ffffff", verticalAlign: "center", horizontalAlign: "flex-start" },
                            ]}
                            buttons={[
                                { 
                                    type: "outline-danger", 
                                    text: "Remove", 
                                    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
                                        e.stopPropagation();
                                        onSetSubjectId(obj.id);
                                        modal_onShow("REMOVE"); 
                                    } 
                                },
                                { 
                                    type: "outline-success", 
                                    text: "Modify", 
                                    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
                                        e.stopPropagation();
                                        onSetCellType(obj.type);
                                        onSetCellDateTime(obj.dateTime);
                                        onSetSubjectId(obj.id);
                                        onSetObjectiveTitle(obj.title);
                                        onSetObjectiveDescription(obj.description);
                                        modal_onShow("OBJECTIVE_PUT"); 
                                    } 
                                }
                            ]}
                            onClick={() => {
                                obj.display = "NORMAL";
                                data_onSetObjectiveList([
                                    ...data_objectiveList
                                ])
                            }}
                        />
                    }
                }

                if(obj instanceof DateType && obj.type === "DATE") {
                    return <CellComponent
                        borderRadius="0px"
                        title={{ text: obj.getDate(), backgroundColor: "513674", verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
                    />
                }
            }
        )}
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