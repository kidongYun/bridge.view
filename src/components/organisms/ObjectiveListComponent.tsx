import React from 'react'
import Component, { ComponentProps } from '../atoms/Component'

import ObjectiveType from '../../model/ObjectiveType';
import DateType from '../../model/DateType';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useHandle from '../../hooks/useHandle'
import useData from '../../hooks/useData'
import useCell from '../../hooks/useCell'

import ObjectiveComponent from '../molecules/ObjectiveComponent'
import AddComponent from '../molecules/AddComponent';
import DateComponent from '../molecules/DateComponent';

interface ObjectiveListProps {
    component?: ComponentProps
}

const ObjectiveListComponent: React.FC<ObjectiveListProps> = ({}) => {
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
    <Component direction="column">
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
    </Component>

    return view;
}

export default ObjectiveListComponent;