import React from 'react'
import Component from '../templates/Component'

import TextareaComponent from '../atoms/TextareaComponent'
import LabelComponent from '../atoms/LabelComponent'
import ButtonComponent from '../atoms/ButtonComponent'

import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'
import usePlans from '../../redux/plans/hook'
import useNoti from '../../redux/noti/hook'

import { TemplateBuilder } from '../../redux/stores/template';
import Plan, { PlanBuilder } from '../../redux/stores/plan'


interface PlanHandleProps {}

const PlanHandleComponent: React.FC<PlanHandleProps> = () => {
    const { selectCell } = useCell();
    const { setDialog, setLeft } = usePage();
    const { showNoti, hideNoti } = useNoti();
    const { putPlans } = usePlans();

    console.log(selectCell);

    let id: number = -1;
    let objectiveId: number = -1;
    let content: string = "";
    let startDateTime: string = "";
    let status: number = 0;
    
    if(selectCell instanceof Plan && selectCell.type === "PLAN") {
        id = selectCell.id;
        objectiveId = selectCell.objectiveId;
        content = selectCell.content;
        startDateTime = selectCell.startDateTime;
        status = selectCell.status;
    }

    let view = 
    <Component
        direction="column" 
        marginLeft="auto" 
        marginRight="auto"
        width="80%">

        <Component borderBottom="solid 1px #eeeeee">
            <LabelComponent label="Plan" size="20pt" />
        </Component>

        <Component>
            <TextareaComponent
                value={content}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    content = value;
                }}
            />
        </Component>

        <Component  borderTop="solid 1px #eeeeee">
            <Component width="300%"></Component>
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

                    const plan: Plan = new PlanBuilder().id(id).objectiveId(objectiveId)
                    .content(content).startDateTime(startDateTime).status(status).build()

                    putPlans(plan);
            
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