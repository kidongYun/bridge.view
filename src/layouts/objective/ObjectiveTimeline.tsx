import React from 'react'
import styled from 'styled-components'

import Cell from '../../components/cell/Cell';
import ObjectiveTemplate from '../../components/cell/template/ObjectiveTemplate'
import ObjectiveType from '../../model/ObjectiveType';
import DateType from '../../model/DateType';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useModal from '../../hooks/useModal';
import useData from '../../hooks/useData';
import useCell from '../../hooks/useCell';

const ObjectiveTimeline = () => {
    const { onShowModal } = useModal();
    const { objectiveList, onSetObjectiveList } = useData();
    const { onDeleteCell } = useCell();

    React.useEffect(() => {
        data.getObj().then((response) => {
            onSetObjectiveList(utility.parse(response.data));
        })
    }, []);

    let view = 
    <Container>
        <Cell
            borderRadius="10px"
            backgroundColor="#007bff"
            height="80px"
            header={{ text: "+", color: "#ffffff", verticalAlign: "center", horizontalAlign: "center" }}
        />

        {objectiveList.map(
            (obj) => {
                if(obj instanceof ObjectiveType && obj.type === "OBJECTIVE") {
                    if(obj.display === "NORMAL") {
                        return <ObjectiveTemplate
                            height={"80px"}
                            header={obj.title}
                            contents={[]}
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
                        return <ObjectiveTemplate
                            height={"150px"}
                            header={obj.title}
                            contents={[
                                obj.description
                            ]}
                            status={obj.status}
                            buttons={[
                                { type: "outline-danger", text: "Remove", onClick: () => { onDeleteCell(obj); onShowModal("REMOVE") } },
                                { type: "outline-success", text: "Modify", onClick: () => { } }
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
                        height="100px"
                        header={{ text: obj.date, verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
                        contents={[]}
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