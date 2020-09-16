import React from 'react'
import styled from 'styled-components'

import Cell from '../../components/cell/Cell';
import ObjectiveType from '../../model/ObjectiveType';
import DateType from '../../model/DateType';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useModal from '../../hooks/useModal';
import useData from '../../hooks/useData';
import useSubject from '../../hooks/useSubject';
import { SubjectBuilder } from '../../model/SubjectType';

const ObjectiveTimeline = () => {
    const { onShowModal } = useModal();
    const { objectiveList, onSetObjectiveList } = useData();
    const { onDeleteSubject, onUpdateSubject } = useSubject();

    React.useEffect(() => {
        data.getObj(true).then((response) => {
            onSetObjectiveList(utility.parse(response.data.cells));
        });
    }, []);

    console.log(objectiveList);

    let view = 
    <Container>
        <Cell
            borderRadius="10px"
            backgroundColor="#007bff"
            backgroundHover="#0069d9"
            height="80px"
            header={{ text: "+", fontSize: "20pt", color: "#ffffff", verticalAlign: "center", horizontalAlign: "center" }}
            onClick={() => { onUpdateSubject(new SubjectBuilder().build()); onShowModal("OBJECTIVE_POST"); }}
        />

        {objectiveList.map(
            (obj) => {
                if(obj instanceof ObjectiveType && obj.type === "OBJECTIVE") {
                    if(obj.display === "NORMAL") {
                        return <Cell
                            borderRadius="10px"
                            backgroundColor="#eeeeee"
                            backgroundHover="#e4e4e4"
                            height="80px"
                            header={{ text: obj.title, fontSize: "13pt", verticalAlign: "center", horizontalAlign: "center" }}
                            status={obj.status}
                            onClick={() => {
                                obj.display = "DETAIL";
                                onSetObjectiveList([
                                    ...objectiveList
                                ])
                            }}
                        />
                    }

                    if(obj.display === "DETAIL") {
                        return <Cell
                            borderRadius="10px"
                            backgroundColor="#eeeeee"
                            backgroundHover="#e4e4e4"
                            header={{ text: obj.title, fontSize: "13pt", verticalAlign: "center", horizontalAlign: "center" }}
                            contents={[
                                { text: obj.description, borderRadius: "10px", backgroundColor: "#ffffff", verticalAlign: "center", horizontalAlign: "center" },
                                { text: obj.getDate(), borderRadius: "10px", backgroundColor: "#ffffff", verticalAlign: "center", horizontalAlign: "flex-start" },
                            ]}
                            status={obj.status}
                            buttons={[
                                { 
                                    type: "outline-danger", 
                                    text: "Remove", 
                                    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
                                        e.stopPropagation(); 
                                        onDeleteSubject(obj); 
                                        onShowModal("REMOVE"); 
                                    } 
                                },
                                { 
                                    type: "outline-success", 
                                    text: "Modify", 
                                    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { 
                                        e.stopPropagation(); 
                                        onUpdateSubject(obj); 
                                        onShowModal("OBJECTIVE_PUT"); 
                                    } 
                                }
                            ]}
                            onClick={() => {
                                obj.display = "NORMAL";
                                onSetObjectiveList([
                                    ...objectiveList
                                ])
                            }}
                        />
                    }
                }

                if(obj instanceof DateType && obj.type === "DATE") {
                    return <Cell
                        borderRadius="0px"
                        header={{ text: obj.getDate(), backgroundColor: "513674", verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
                        status={0}
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

export default ObjectiveTimeline;