import React from 'react'
import styled from 'styled-components'

import Cell from '../../components/cell/Cell';
import ObjectiveType from '../../model/ObjectiveType';
import DateType from '../../model/DateType';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useModal from '../../hooks/useModal';
import useObjective from '../../hooks/useObjective';

const ObjectiveTimeline = () => {
    const { onShowModal } = useModal();
    const { objectiveList, onGetObjective } = useObjective();

    React.useEffect(() => {
        data.getObj().then((response) => {
            onGetObjective(utility.parse(response.data));
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
                        onClick={() => { onShowModal("REMOVE")}}
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