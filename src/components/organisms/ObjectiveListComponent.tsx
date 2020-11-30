import React from 'react'
import Component from '../templates/Component'

import Objective from '../../data/stores/objective'
import Date from '../../data/stores/date';

import ObjectiveType from '../../model/ObjectiveType';
import DateType from '../../model/DateType';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useHandle from '../../hooks/useHandle'
import useData from '../../hooks/useData'
import useCell from '../../hooks/useCell'

import useObjectives from '../../data/hooks/useObjectives'

import ObjectiveComponent from '../molecules/ObjectiveComponent'
import AddComponent from '../molecules/AddComponent';
import DateComponent from '../molecules/DateComponent';
import Cell from '../../data/stores/cell';

interface ObjectiveListProps {
}

const ObjectiveListComponent: React.FC<ObjectiveListProps> = (props) => {
    const {
        getObjectives,
        callObjectives
     } = useObjectives();

    const { 
        onSetCellType,
        onSetCellEndDateTime,
        onSetSubjectId,
        onSetObjectiveTitle,
        onSetObjectiveDescription
     } = useCell();

    React.useEffect(() => {
        callObjectives();
    }, []);

    let view =
    <Component direction="column">
        <AddComponent 
            onClick={() => {}}
        />

        {getObjectives.map(cell => {
            if(cell instanceof Objective && cell.type === "OBJECTIVE") {
                return <ObjectiveComponent
                    title={cell.title}
                    description={cell.description}
                    deadline={cell.getDate()}
                    onClick={() => {
                        onSetCellType(cell.type);
                        onSetCellEndDateTime(cell.endDateTime);
                        onSetSubjectId(cell.id);
                        onSetObjectiveTitle(cell.title);
                        onSetObjectiveDescription(cell.description);
                    }}
                />
            }

            if(cell instanceof Date && cell.type === "DATE") {
                return <DateComponent date={cell.getDate()} />
            }
        })}
    </Component>

    return view;
}

export default ObjectiveListComponent;