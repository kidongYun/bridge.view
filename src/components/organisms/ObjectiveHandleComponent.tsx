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

    let id: number = -1;
    let title: string = "";
    let description: string = "";
    let priority: number = 1;
    let deadline: string = "";

    if(selectCell instanceof Objective && selectCell.type === "OBJECTIVE") {
        postOrPut = "PUT";
        
        id = selectCell.id;
        title = selectCell.title;
        description = selectCell.description;
        priority = selectCell.priority;
        deadline = selectCell.endDateTime;
    }

    let buttons = <></>;
    if(postOrPut == "POST") {
        buttons = 
        <>
            <ButtonComponent 
                theme="primary" 
                text="Add"
                onClick={() => {

                    const obj: Objective = new ObjectiveBuilder()
                    .title(title).description(description)
                    .endDateTime(deadline).priority(priority).build();

                    postObjectives(obj);
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

                    const obj: Objective = new ObjectiveBuilder()
                    .id(id).title(title).description(description)
                    .endDateTime(deadline).priority(priority).build();
                    
                    putObjectives(obj);
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
                    deleteObjectives(id);
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
            <LabelComponent label="Objective" size="20pt" />
        </Component>

        <Component>
            <TextComponent
                value={title}
                placeholder="TITLE"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target; 
                    title = value; 
                }}
            />      
        </Component>

        <Component>
            <TextareaComponent 
                value={description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    description = value;
                }}
            />
        </Component>

        <Component horizontalAlign="flex-start" verticalAlign="flex-end">
            <Component width="auto" height="auto"><LabelComponent label="Priority" /></Component>
        </Component>

        <Component>
            <SelectComponent
                value={priority + ""}
                options={[
                    { title: "Major", value: "1" },
                    { title: "Minor", value: "2" }
                ]}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    priority = Number.parseInt(value);
                }} 
            />
        </Component>

        <Component horizontalAlign="flex-start" verticalAlign="flex-end">
            <Component width="auto" height="auto"><LabelComponent label="Deadline" /></Component>
        </Component>

        <Component >
            <TextComponent 
                placeholder="2020-07-21"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    deadline = value;
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