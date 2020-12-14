import React from 'react'
import Component from '../templates/Component'
import Cell from '../../redux/stores/cell';

import useCell from '../../redux/cell/hook'
import PlanComponent from '../molecules/PlanComponent';

interface PlanListProps {
    plans?: Cell[];
}

const PlanListComponent: React.FC<PlanListProps> = (props) => {
    const { setPlan } = useCell();

    let plans = <></>;
    plans = <PlanComponent objectiveId={32} content="It's content" />

    let view =
    <Component>
        {plans}
    </Component>

    return view;
}

export default PlanListComponent;