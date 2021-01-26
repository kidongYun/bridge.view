import React, { useState, useEffect } from 'react'
import Component from '../templates/Component'

import TextareaComponent from '../atoms/TextareaComponent'
import TextComponent from '../atoms/TextComponent'
import LabelComponent from '../atoms/LabelComponent'
import ButtonComponent from '../atoms/ButtonComponent'

import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'
import usePlans from '../../redux/plans/hook'
import useNoti from '../../redux/noti/hook'
import useSign from '../../redux/sign/hook'
import useObjectives from '../../redux/objectives/hook'

import { TemplateBuilder } from '../../redux/stores/template';
import Objective from '../../redux/stores/objective'
import Plan from '../../redux/stores/plan'
import Sign from '../../redux/stores/sign'
import DisabledTextComponent from '../atoms/DisabledTextComponent'

interface PlanHandleProps {}

const PlanHandleComponent: React.FC<PlanHandleProps> = () => {
    const { selectCell } = useCell();
    const { selectSign } = useSign();
    const { selectObjectives } = useObjectives();
    const { setDialog, setLeft } = usePage();
    const { showNoti, hideNoti } = useNoti();
    const { putPlans } = usePlans();

    const [plan, setPlan] = useState(Plan.empty());
    const [objective, setObjective] = useState(Objective.empty())

    let sign: Sign = Sign.empty();

    if(selectSign.body instanceof Sign) {
        sign = selectSign.body;
    }
    
    useEffect(() => {
        if(selectCell instanceof Plan && selectCell.type === "PLAN") {
            setPlan(selectCell);

            selectObjectives.map(obj => {
                if(obj.id === selectCell.objectiveId) {
                    setObjective(obj);
                }
            })
        }
    }, [selectCell])

    let view = 
    <Component
        direction="column" 
        marginLeft="auto" 
        marginRight="auto"
        width="80%">

        <Component height="100px" borderBottom="solid 1px #eeeeee">
            <LabelComponent weight="bold" label="Plan" size="20pt" color="#333333" />
        </Component>

        <Component direction="column" paddingTop="10px" horizontalAlign="flex-start">

            <Component height="70px" horizontalAlign="flex-start" verticalAlign="flex-end">
                <Component width="auto" height="auto">
                    <LabelComponent weight="bold" label="Objective" size="15pt" color="#333333" />
                </Component>
            </Component>

            <Component height="150px" verticalAlign="flex-start">
                <Component height="auto">
                    <DisabledTextComponent value={objective.title} />     
                </Component> 
            </Component>


            <Component height="70px" horizontalAlign="flex-start" verticalAlign="flex-end">
                <Component width="auto" height="auto">
                    <LabelComponent weight="bold" label="Content" size="15pt" color="#333333" />
                </Component>
            </Component>

            <Component height="150px" verticalAlign="flex-start">
                <TextareaComponent
                    value={plan.content}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setPlan({ ...plan, content: event.target.value })
                    }}
                />
            </Component>
        </Component>

        <Component height="100px" borderTop="solid 1px #eeeeee" horizontalAlign="flex-end">
            <ButtonComponent 
                theme="secondary" 
                text="Cancel" 
                onClick={() => {
                    if(window.innerWidth >= 1000) {
                        setLeft(new TemplateBuilder().display(false).build());
                    } else {
                        setDialog(new TemplateBuilder().display(false).build());
                    }
                }}
            />

            <ButtonComponent
                theme="primary" 
                text="Modify"
                onClick={() => {
                    putPlans(plan, sign);
            
                    showNoti("Plan is Updated", "success");
                    setTimeout(hideNoti, 2300);

                    if(window.innerWidth >= 1000) {
                        setLeft(new TemplateBuilder().display(false).build());
                    } else {
                        setDialog(new TemplateBuilder().display(false).build());
                    }
                }}
            />

            <ButtonComponent 
                theme="danger" 
                text="Remove"
                onClick={() => {
                    
                    showNoti("Objective is Updated", "success");
                    setTimeout(hideNoti, 2300);

                    if(window.innerWidth >= 1000) {
                        setLeft(new TemplateBuilder().display(false).build());
                    } else {
                        setDialog(new TemplateBuilder().display(false).build());
                    }
                }}
            />
        </Component>
    </Component>

    return view;
}

export default PlanHandleComponent;