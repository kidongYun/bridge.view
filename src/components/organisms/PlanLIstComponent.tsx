import React from 'react'
import Component from '../templates/Component'
import * as util from '../../service/Utility'

import useObjectives from '../../redux/objectives/hook'
import usePlans from '../../redux/plans/hook'
import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'

import PlanComponent from '../molecules/PlanComponent';
import DateComponent from '../molecules/DateComponent';

import Cell from '../../redux/stores/cell';
import Objective from '../../redux/stores/objective';
import Plan, { PlanBuilder } from '../../redux/stores/plan';
import Date from '../../redux/stores/date'

import { TemplateBuilder } from '../../redux/stores/template';

interface PlanListProps {
}

const PlanListComponent: React.FC<PlanListProps> = (props) => {
    const { selectObjectives } = useObjectives();
    const { selectPlans, getPlans } = usePlans();
    const { setPlan } = useCell();
    const { setDialog, setLeft } = usePage();

    React.useEffect(() => {
        getPlans(true);
    }, [])

    const plans: Cell[] = util.parse(selectPlans.body)
    const objectives: Cell[] = util.parse(selectObjectives.body)

    let plansView = <></>;
    if(plans !== undefined) {

        plansView = 
        <> 
        {
            plans.map(cell => {
                if(cell instanceof Plan && cell.type === "PLAN") {
                    let objective: Objective | undefined = undefined;
                    
                    objectives!.map(obj => {
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
        {plansView}
    </Component>

    return view;
}

export default PlanListComponent;