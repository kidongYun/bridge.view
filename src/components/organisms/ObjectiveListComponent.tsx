import React from 'react'
import Component from '../templates/Component'
import Objective from '../../redux/stores/objective'

import useObjectives from '../../redux/objectives/hook'
import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'

import ObjectiveComponent from '../molecules/ObjectiveComponent'
import AddComponent from '../molecules/AddComponent';
import { ObjectiveBuilder } from '../../redux/stores/objective'
import { TemplateBuilder } from '../../redux/stores/template';

interface ObjectiveListProps {}

const ObjectiveListComponent: React.FC<ObjectiveListProps> = () => {
    const { selectObjectives, getObjectives } = useObjectives();
    const { setObjective, flush } = useCell();
    const { setDialog, setLeft } = usePage();

    React.useEffect(() => {
        getObjectives();
    }, [])

    let objectivesView = <></>;
    if(selectObjectives !== undefined) {
        objectivesView = 
        <>
        {
            selectObjectives.map(cell => {
                if(cell instanceof Objective && cell.type === "OBJECTIVE") {
                    return <ObjectiveComponent
                        objective={cell}
                        onClick={() => {
                            if(window.innerWidth >= 1000) {
                                setLeft(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                            } else {
                                setDialog(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                            }

                            setObjective(new ObjectiveBuilder().id(cell.id!).type(cell.type)
                            .endDateTime(cell.endDateTime!).title(cell.title!)
                            .description(cell.description!).priorityId(cell.priorityId!).build());
                        }}
                    />
                }
            })
        }
        </>;
    }

    let view =
    <Component direction="column" display="inline-block" width="90%" height="90%">
        <AddComponent 
            onClick={() => {
                if(window.innerWidth >= 1000) {
                    setLeft(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                } else {
                    setDialog(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                }

                flush();
            }}
        />
        {objectivesView}
    </Component>

    return view;
}

export default ObjectiveListComponent;