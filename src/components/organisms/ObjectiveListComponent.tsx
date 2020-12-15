import React from 'react'
import Component from '../templates/Component'
import * as util from '../../service/Utility'

import Objective from '../../redux/stores/objective'
import Date from '../../redux/stores/date';

import useObjectives from '../../redux/objectives/hook'
import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'

import ObjectiveComponent from '../molecules/ObjectiveComponent'
import AddComponent from '../molecules/AddComponent';
import DateComponent from '../molecules/DateComponent';
import Cell from '../../redux/stores/cell';
import { ObjectiveBuilder } from '../../redux/stores/objective'
import { TemplateBuilder } from '../../redux/stores/template';

interface ObjectiveListProps {}

const ObjectiveListComponent: React.FC<ObjectiveListProps> = () => {
    const { selectObjectives, getObjectives } = useObjectives();
    const { setObjective } = useCell();
    const { setDialog, setLeft } = usePage();

    React.useEffect(() => {
        getObjectives(true);
    }, [])

    const objectives: Cell[] = util.parse(selectObjectives.body)

    let objectivesView = <></>;
    if(objectives !== undefined) {
        objectivesView = 
        <>
        {
            objectives.map(cell => {
                if(cell instanceof Objective && cell.type === "OBJECTIVE") {
                    return <ObjectiveComponent
                        title={cell.title}
                        description={cell.description}
                        deadline={cell.getDate()}
                        onClick={() => {
                            if(window.innerWidth >= 1000) {
                                setLeft(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                            } else {
                                setDialog(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                            }

                            setObjective(new ObjectiveBuilder().type(cell.type)
                            .endDateTime(cell.endDateTime).id(cell.id).title(cell.title)
                            .description(cell.description).priority(cell.priority).build());
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
        {objectivesView}
    </Component>

    return view;
}

export default ObjectiveListComponent;