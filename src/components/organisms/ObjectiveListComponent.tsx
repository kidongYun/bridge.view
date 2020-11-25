import React from 'react'
import Component, { ComponentProps } from '../templates/Component'

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
import useTemplate from '../../data/hooks/useTemplate'

import ObjectiveComponent from '../molecules/ObjectiveComponent'
import AddComponent from '../molecules/AddComponent';
import DateComponent from '../molecules/DateComponent';

interface ObjectiveListProps {
    component?: ComponentProps
}

const ObjectiveListComponent: React.FC<ObjectiveListProps> = ({}) => {
    const { handle_onShow } = useHandle();

    const { 
        onSetCellType,
        onSetCellEndDateTime,
        onSetSubjectId,
        onSetObjectiveTitle,
        onSetObjectiveDescription
     } = useCell();

     const {
        getObjectives,
        callObjectives
     } = useObjectives();

     const {
        setTemplate
     } = useTemplate();

    React.useEffect(() => {
        console.log("useEffect!!!");
        callObjectives();
    }, []);

    let view =
    <Component direction="column">
        <AddComponent 
            onClick={() => {
                setTemplate("DIALOG", true);
            }}
        />

        {getObjectives.map(cell => {
            if(cell instanceof Objective && cell.type === "OBJECTIVE") {
                return <ObjectiveComponent
                    title={cell.title}
                    description={cell.description}
                    deadline={cell.getDate()}
                    component={{
                        onClick: () => {
                            onSetCellType(cell.type);
                            onSetCellEndDateTime(cell.endDateTime);
                            onSetSubjectId(cell.id);
                            onSetObjectiveTitle(cell.title);
                            onSetObjectiveDescription(cell.description);
                            handle_onShow("OBJECTIVE_PUT"); 
                        }
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