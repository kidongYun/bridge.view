import React from 'react'
import styled from 'styled-components'

import Cell from '../../components/cell/Cell';
import ObjectiveType from '../../model/ObjectiveType';
import DateType from '../../model/DateType';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useModal from '../../hooks/useModal';
import useData from '../../hooks/useData';
import useCell from '../../hooks/useCell';
import CellType from '../../model/CellType';

const ObjectiveTimeline = () => {
    const { onShowModal } = useModal();
    const { objectiveList, onSetObjectiveList } = useData();
    const { onDeleteCell, onUpdateCell } = useCell();

    React.useEffect(() => {
        data.getObj(true).then((response) => {
            onSetObjectiveList(utility.parse(response.data));
            console.log(response.data);
        })
    }, []);

    let view = 
    <Container>
        <Cell
            borderRadius="10px"
            backgroundColor="#007bff"
            backgroundHover="#0069d9"
            height="80px"
            header={{ text: "+", fontSize: "20pt", color: "#ffffff", verticalAlign: "center", horizontalAlign: "center" }}
            onClick={() => { onUpdateCell(new CellType(-1, "CELL")); onShowModal("OBJECTIVE"); }}
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
                                { text: obj.deadline, borderRadius: "10px", backgroundColor: "#ffffff", verticalAlign: "center", horizontalAlign: "flex-start" },
                            ]}
                            status={obj.status}
                            buttons={[
                                { type: "outline-danger", text: "Remove", onClick: () => { onDeleteCell(obj); onShowModal("REMOVE"); } },
                                { type: "outline-success", text: "Modify", onClick: () => { onUpdateCell(obj); onShowModal("OBJECTIVE"); } }
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
                        header={{ text: obj.date, backgroundColor: "513674", verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
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