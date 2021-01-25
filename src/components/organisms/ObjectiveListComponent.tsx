import React, { useEffect } from 'react'
import Component from '../templates/Component'
import Objective from '../../redux/stores/objective'

import useObjectives from '../../redux/objectives/hook'
import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'
import useSign from '../../redux/sign/hook'

import ObjectiveComponent from '../molecules/ObjectiveComponent'
import AddComponent from '../molecules/AddComponent';
import { ObjectiveBuilder } from '../../redux/stores/objective'
import { TemplateBuilder } from '../../redux/stores/template';
import Sign from '../../redux/stores/sign'

interface ObjectiveListProps {}

const ObjectiveListComponent: React.FC<ObjectiveListProps> = () => {
    const { selectObjectives, getObjectives } = useObjectives();
    const { setObjective, flush } = useCell();
    const { setDialog, setLeft } = usePage();
    const { selectSign } = useSign();

    useEffect(() => {
        if(selectSign.body instanceof Sign) {
            getObjectives(selectSign.body);
        }
    }, [])

    let objectivesView = <></>;
    if(selectObjectives !== undefined) {
        console.log(selectObjectives);

        objectivesView = 
        <>
        {
            selectObjectives.map(obj => {
                if(obj instanceof Objective && obj.type === "OBJECTIVE") {
                    return <ObjectiveComponent
                        objective={obj}
                        onClick={() => {
                            if(window.innerWidth >= 1000) {
                                setLeft(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                            } else {
                                setDialog(new TemplateBuilder().display(true).component("ObjectiveHandle").build());
                            }

                            setObjective(new ObjectiveBuilder().id(obj.id!).type(obj.type)
                            .endDateTime(obj.endDateTime!).title(obj.title!)
                            .description(obj.description!).priorityId(obj.priorityId!).build());
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