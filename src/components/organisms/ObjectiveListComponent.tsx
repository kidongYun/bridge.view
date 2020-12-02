import React from 'react'
import Component from '../templates/Component'

import Objective from '../../data/stores/objective'
import Date from '../../data/stores/date';

import useCell from '../../data/hooks/useCell'
import useWindow from '../../data/hooks/usePage'

import ObjectiveComponent from '../molecules/ObjectiveComponent'
import AddComponent from '../molecules/AddComponent';
import DateComponent from '../molecules/DateComponent';
import Cell from '../../data/stores/cell';
import { ObjectiveBuilder } from '../../data/stores/objective'
import usePage from '../../data/hooks/usePage';
import { TemplateBuilder } from '../../data/stores/template';

interface ObjectiveListProps {
    objectives: Cell[];
}

const ObjectiveListComponent: React.FC<ObjectiveListProps> = (props) => {
    const { setObjective } = useCell();
    const { setDialog, setLeft } = usePage();

    let view =
    <Component direction="column" display="inline-block">
        <AddComponent 
            onClick={() => {
                if(window.innerWidth >= 1000) {
                    setLeft(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                } else {
                    setDialog(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                }
            }}
        />
        
        {props.objectives.map(cell => {
            if(cell instanceof Objective && cell.type === "OBJECTIVE") {
                return <ObjectiveComponent
                    title={cell.title}
                    description={cell.description}
                    deadline={cell.getDate()}
                    onClick={() => {
                        setObjective(new ObjectiveBuilder().type(cell.type)
                        .endDateTime(cell.endDateTime).id(cell.id)
                        .title(cell.title).description(cell.description).build());
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