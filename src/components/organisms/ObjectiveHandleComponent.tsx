import React from 'react'
import Component, { ComponentProps } from '../templates/Component'

import LabelComponent from '../atoms/LabelComponent'
import TextComponent from '../atoms/TextComponent'
import TextareaComponent from '../atoms/TextareaComponent'
import SelectComponent from '../atoms/SelectComponent'
import ButtonComponent from '../atoms/ButtonComponent'

import usePage from '../../redux/hooks/usePage'
import useNoti from '../../redux/hooks/useNoti'
import { TemplateBuilder } from '../../redux/stores/template'
import Objective, { ObjectiveBuilder } from '../../redux/stores/objective'

interface ObjectivePostProps {
    component?: ComponentProps
}

const ObjectivePostComponent: React.FC<ObjectivePostProps> = ({
}) => {
    const { setDialog, setLeft } = usePage();
    const { showNoti, hideNoti } = useNoti();

    let title: string = "";
    let description: string = "";
    let priority: number = 0;
    let deadline: string = "";

    let view =
    <Component 
        direction="column" 
        marginLeft="auto" 
        marginRight="auto"
        width="80%">
        
        <Component borderBottom="solid 1px #eeeeee">
            <LabelComponent label="Create Objective" size="20pt" />
        </Component>

        <Component>
            <TextComponent 
                placeholder="TITLE"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target; 
                    title = value; 
                }}
            />      
        </Component>

        <Component>
            <TextareaComponent 
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
                value="Major"
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
            <ButtonComponent 
                theme="primary" 
                text="Add"
                onClick={() => {
                    const obj: Objective = new ObjectiveBuilder()
                        .title(title).description(description)
                        .endDateTime(deadline).priority(priority).build();

                    if(window.innerWidth >= 1000) {
                        setLeft(new TemplateBuilder().display(false).build());
                    } else {
                        setDialog(new TemplateBuilder().display(false).build());
                    }

                    showNoti("Objective is Created", "success");
                    setTimeout(hideNoti, 2300);
                }}
            />
        </Component>
    </Component>

    return view;
}

export default ObjectivePostComponent;