import React from 'react'
import Component from '../templates/Component'
import Cell from '../../redux/stores/cell';

import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'

import PlanComponent from '../molecules/PlanComponent';
import DateComponent from '../molecules/DateComponent';

import Objective from '../../redux/stores/objective';
import Plan, { PlanBuilder } from '../../redux/stores/plan';
import Date from '../../redux/stores/date'

import { TemplateBuilder } from '../../redux/stores/template';

interface PlanListProps {
    plans?: Cell[];
    objectives?: Cell[];
}

const PlanListComponent: React.FC<PlanListProps> = (props) => {
    const { setPlan } = useCell();
    const { setDialog, setLeft } = usePage();

    let plans = <></>;
    if(props.plans !== undefined) {

        plans = 
        <> 
        {
            props.plans.map(cell => {
                if(cell instanceof Plan && cell.type === "PLAN") {
                    let objective: Objective | undefined = undefined;
                    
                    props.objectives!.map(obj => {
                        if(obj instanceof Objective && obj.type === "OBJECTIVE") {
                            if(obj.id === cell.objectiveId) {
                                objective = obj;
                            }
                        }
                    })

                    return <PlanComponent plan={cell} objective={objective!} onClick={() => {
                        if(window.innerWidth >= 1000) {
                            setLeft(new TemplateBuilder().display(true).component("PlanHandle").build());
                        } else {
                            setDialog(new TemplateBuilder().display(true).component("PlanHandle").build());
                        }

                        setPlan(new PlanBuilder().type(cell.type)
                        .id(cell.id).objectiveId(cell.objectiveId).content(cell.content)
                        .status(cell.status).startDateTime(cell.startDateTime).build())
                    }} />
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
        {plans}
    </Component>

    return view;
}

export default PlanListComponent;