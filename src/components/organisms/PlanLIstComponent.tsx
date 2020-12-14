import React from 'react'
import Component from '../templates/Component'
import Cell from '../../redux/stores/cell';

import useCell from '../../redux/cell/hook'
import PlanComponent from '../molecules/PlanComponent';
import Plan from '../../redux/stores/plan';
import Date from '../../redux/stores/date'
import DateComponent from '../molecules/DateComponent';

interface PlanListProps {
    plans?: Cell[];
}

const PlanListComponent: React.FC<PlanListProps> = (props) => {
    const { setPlan } = useCell();

    let plans = <></>;
    if(props.plans !== undefined) {
        plans = 
        <> 
        {
            props.plans.map(cell => {
                if(cell instanceof Plan && cell.type === "PLAN") {
                    console.log(cell.type + " in PLAN");
                    return <PlanComponent objectiveId={32} content="It's content" />
                }

                if(cell instanceof Date && cell.type === "DATE") {
                    console.log(cell.type + " in DATE");
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