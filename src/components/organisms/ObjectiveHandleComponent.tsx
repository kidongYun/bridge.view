import React from 'react'
import Component from '../templates/Component'

import LabelComponent from '../atoms/LabelComponent'
import TextComponent from '../atoms/TextComponent'
import TextareaComponent from '../atoms/TextareaComponent'
import SelectComponent from '../atoms/SelectComponent'
import ButtonComponent from '../atoms/ButtonComponent'

import useCell from '../../redux/cell/hook'
import usePage from '../../redux/page/hook'
import useNoti from '../../redux/noti/hook'
import useObjectives from '../../redux/objectives/hook'

import { TemplateBuilder } from '../../redux/stores/template'
import Objective, { ObjectiveBuilder } from '../../redux/stores/objective'

interface ObjectiveHandleProps {}

const ObjectiveHandleComponent: React.FC<ObjectiveHandleProps> = () => {
    const { selectCell } = useCell();
    const { setDialog, setLeft } = usePage();
    const { showNoti, hideNoti } = useNoti();
    const { postObjectives, putObjectives, deleteObjectives } = useObjectives();

    let postOrPut: string = "POST";

    let objective: Objective = new Objective();

    if(selectCell instanceof Objective && selectCell.type === "OBJECTIVE") {
        postOrPut = "PUT";

        objective = selectCell;
    }

    let buttons = <></>;
    if(postOrPut == "POST") {
        buttons = 
        <>
            <ButtonComponent 
                theme="primary" 
                text="Add"
                onClick={() => {

                    if(objective.title === undefined || objective.description === undefined
                        || objective.endDateTime === undefined || objective.priorityId === undefined) {
                        return;
                    }

                    postObjectives(objective);
                    showNoti("Objective is Created", "success");
                    setTimeout(hideNoti, 2300);

                    if(window.innerWidth >= 1000) {
                        setLeft(new TemplateBuilder().display(false).build());
                    } else {
                        setDialog(new TemplateBuilder().display(false).build());
                    }
                }}
            />
        </>;
    } else if(postOrPut == "PUT") {
        buttons =
        <>
            <ButtonComponent 
                theme="primary" 
                text="Modify"
                onClick={() => {

                    if(objective.title === undefined || objective.description === undefined
                        || objective.endDateTime === undefined || objective.priorityId === undefined) {
                        return;
                    }

                    putObjectives(objective);
                    showNoti("Objective is Updated", "success");
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
                    deleteObjectives(objective.id!);
                    showNoti("Objective is removed", "success");
                    setTimeout(hideNoti, 2300);

                    if(window.innerWidth >= 1000) {
                        setLeft(new TemplateBuilder().display(false).build());
                    } else {
                        setDialog(new TemplateBuilder().display(false).build());
                    }
                }}
            />
        </>;
    }

    let view =
    <Component 
        direction="column" 
        marginLeft="auto" 
        marginRight="auto" 
        width="80%">

        <Component borderBottom="solid 1px #eeeeee">
            <LabelComponent label="목표" size="20pt" />
        </Component>

        <Component height="50%" horizontalAlign="flex-start" verticalAlign="flex-end">
            <Component width="auto" height="auto">
                <LabelComponent label="목표"/>
            </Component>
        </Component>

        <Component height="50%" verticalAlign="flex-start">
            <Component height="auto">
                <TextComponent
                    value={objective.title}
                    placeholder="목표를 입력해주세요"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target; 
                        objective.title = value; 
                    }}
                />     
            </Component> 
        </Component>

        <Component height="50%" horizontalAlign="flex-start" verticalAlign="flex-end">
            <Component width="auto" height="auto">
                <LabelComponent label="설명"/>
            </Component>
        </Component>

        <Component height="200%" verticalAlign="flex-start">
            <Component height="auto">
                <TextareaComponent 
                    placeholder="어떤 목표인지 자세히 알려주세요"
                    value={objective.description}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        objective.description = value;
                    }}
                />
            </Component>
        </Component>

        <Component height="50%" horizontalAlign="flex-start" verticalAlign="flex-end">
            <Component width="auto" height="auto">
                <LabelComponent label="중요도"/>
            </Component>
        </Component>

        <Component height="50%" verticalAlign="flex-start">
            <Component height="auto">
                <SelectComponent
                    value={objective.priorityId + ""}
                    options={[
                        { title: "Major", value: "1" },
                        { title: "Minor", value: "2" }
                    ]}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        objective.priorityId = Number.parseInt(value);
                    }} 
                />
            </Component>
        </Component>

        <Component height="50%" horizontalAlign="flex-start" verticalAlign="flex-end">
            <Component width="auto" height="auto"><LabelComponent label="기한" /></Component>
        </Component>

        <Component height="50%">
            <TextComponent 
                placeholder="2020-07-21"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    objective.endDateTime = value;
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
            {buttons}
        </Component>
    </Component>

    return view;
}

export default ObjectiveHandleComponent;