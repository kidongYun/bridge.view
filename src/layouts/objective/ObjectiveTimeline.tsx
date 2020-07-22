import React from 'react'
import styled from 'styled-components'

import Cell from '../../components/cell/Cell';
import ObjectiveType from '../../model/ObjectiveType';
import DateType from '../../model/DateType';
import CellType from '../../model/CellType';

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
        {objectiveList.map(
            (obj) => {
                if(obj instanceof ObjectiveType && obj.type === "objective") {
                    return <Cell
                        borderRadius="10px"
                        color="#eeeeee" 
                        height="80px"
                        header={{ text: obj.title, verticalAlign: "center", horizontalAlign: "center" }}
                        content={[]}
                        status={obj.status}
                        onClick={() => {
                            obj.type = "asdasd";
                            data.putObj(obj).then((response) => {
                                onSetObjectiveList(utility.parse(response.data));
                                console.log(objectiveList);
                            })
                        }}
                        onClickBtn1={() => { 
                            onDeleteCell(new CellType(obj.id, obj.type));
                            onShowModal("REMOVE"); 
                        }}
                    />
                }

                if(obj instanceof DateType && obj.type === "date") {
                    return <Cell
                        borderRadius="0px"
                        height="100px"
                        header={{ text: obj.date, verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
                        content={[]}
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