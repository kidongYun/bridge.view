import React from 'react'
import Component from '../templates/Component'
import * as util from '../../service/Utility'

import useObjectives from '../../redux/objectives/hook'
import usePlans from '../../redux/plans/hook'
import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'

import PlanComponent from '../molecules/PlanComponent';
import Objective from '../../redux/stores/objective';
import Plan, { PlanBuilder } from '../../redux/stores/plan';

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

    let plansView = <></>;
    if(selectPlans !== undefined) {

        plansView = 
        <> 
        {
            selectPlans.map(plan => {
                if(plan instanceof Plan && plan.type === "PLAN") {
                    let objective: Objective | undefined = undefined;
                    
                    selectObjectives!.map(obj => {
                        if(obj instanceof Objective && obj.type === "OBJECTIVE") {
                            if(obj.id === plan.objectiveId) {
                                objective = obj;
                            }
                        }
                    })

                    return <PlanComponent plan={plan} objective={objective!} onClick={() => {
                        if(window.innerWidth >= 1000) {
                            setLeft(new TemplateBuilder().display(true).component("PlanHandle").build());
                        } else {
                            setDialog(new TemplateBuilder().display(true).component("PlanHandle").build());
                        }

                        setPlan(new PlanBuilder().type(plan.type)
                        .id(plan.id!).objectiveId(plan.objectiveId!).content(plan.content!)
                        .status(plan.status!).startDateTime(plan.startDateTime!).build())
                    }} />
                }
            })
        }
        </>;
    }

    let view =
    <Component direction="column" display="inline-block" width="90%" height="90%">
        {plansView}
    </Component>

    return view;
}

export default PlanListComponent;