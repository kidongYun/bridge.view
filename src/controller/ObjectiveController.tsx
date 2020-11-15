import React from 'react'
import styled from 'styled-components'

import ObjectiveType from '../model/ObjectiveType';
import DateType from '../model/DateType';

import * as data from '../service/Data'
import * as utility from '../service/Utility'

import useHandle from '../hooks/useHandle';
import useData from '../hooks/useData';
import useCell from '../hooks/useCell';

import ObjectiveComponent from '../components/molecules/ObjectiveComponent'
import AddComponent from '../components/molecules/AddComponent';
import DateComponent from '../components/molecules/DateComponent';


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

    React.useEffect(() => {
        data.getObj(true).then((response) => {
            data_onSetObjectiveList(utility.parse(response.data.data));
        });
    }, []);

    let view = 
    <Container>
        <AddComponent
            onClick={() => { handle_onShow("OBJECTIVE_POST"); }}
        />

        {data_objectiveList.map((obj) => {
            if(obj instanceof ObjectiveType && obj.type === "OBJECTIVE") {
                return <ObjectiveComponent
                    title={obj.title}
                    description={obj.description}
                    deadline={obj.getDate()}
                    component={{
                        onClick: () => {
                            onSetCellType(obj.type);
                            onSetCellEndDateTime(obj.endDateTime);
                            onSetSubjectId(obj.id);
                            onSetObjectiveTitle(obj.title);
                            onSetObjectiveDescription(obj.description);
                            handle_onShow("OBJECTIVE_PUT"); 
                        }
                    }}
                />
            }

            if(obj instanceof DateType && obj.type === "DATE") {
                return <DateComponent date={obj.getDate()} />
            }
        })}
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