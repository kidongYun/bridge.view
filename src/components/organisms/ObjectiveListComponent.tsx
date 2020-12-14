import React from 'react'
import Component from '../templates/Component'

import Objective from '../../redux/stores/objective'
import Date from '../../redux/stores/date';

import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'

import ObjectiveComponent from '../molecules/ObjectiveComponent'
import AddComponent from '../molecules/AddComponent';
import DateComponent from '../molecules/DateComponent';
import Cell from '../../redux/stores/cell';
import { ObjectiveBuilder } from '../../redux/stores/objective'
import { TemplateBuilder } from '../../redux/stores/template';

interface ObjectiveListProps {
    objectives?: Cell[];
}

const ObjectiveListComponent: React.FC<ObjectiveListProps> = (props) => {
    const { setObjective } = useCell();
    const { setDialog, setLeft } = usePage();

    let objectives = <></>;
    if(props.objectives !== undefined) {
        objectives = 
        <>
        {
            props.objectives.map(cell => {
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
            })
        }
        </>;
    }

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
        {objectives}
    </Component>

    return view;
}

export default ObjectiveListComponent;