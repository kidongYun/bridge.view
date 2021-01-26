import React, { useState, useEffect } from 'react'
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
import useSign from '../../redux/sign/hook'

import { TemplateBuilder } from '../../redux/stores/template'
import Objective from '../../redux/stores/objective'
import Sign from '../../redux/stores/sign'

interface ObjectiveHandleProps {}

const ObjectiveHandleComponent: React.FC<ObjectiveHandleProps> = () => {
    const { selectCell } = useCell();
    const { setDialog, setLeft } = usePage();
    const { showNoti, hideNoti } = useNoti();
    const { postObjectives, putObjectives, deleteObjectives } = useObjectives();
    const { selectSign } = useSign();

    const [objective, setObjective] = useState<Objective>(Objective.empty());
    const [postOrPut, setPostOrPut] = useState("POST");

    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [date, setDate] = useState("");

    let sign: Sign = Sign.empty();

    if(selectSign.body instanceof Sign) {
        sign = selectSign.body;
    }

    useEffect(() => {
        setObjective(Objective.empty());
        setPostOrPut("POST");
        setYear("");
        setMonth("");
        setDate("");

        if(selectCell instanceof Objective && selectCell.type === "OBJECTIVE") {
            setPostOrPut("PUT");
            setObjective(selectCell);

            if(selectCell.endDateTime === undefined) {
                return;
            }
            
            const deadline: string = selectCell.endDateTime.toISOString();
            setYear(deadline.substring(0, 4));
            setMonth(deadline.substring(5, 7));
            setDate(deadline.substring(8, 10));
        }
    }, [selectCell]);

    let buttons = <></>;
    if(postOrPut === "POST") {
        buttons = 
        <>
            <ButtonComponent 
                theme="primary" 
                text="Add"
                onClick={() => {
                    objective.endDateTime = new Date(year + "-" + month + "-" + date);
                    
                    if(objective.title === undefined || objective.description === undefined
                        || objective.endDateTime === undefined || objective.priorityId === undefined) {
                        return;
                    }

                    postObjectives(objective, sign);
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
    } else if(postOrPut === "PUT") {
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

                    putObjectives(objective, sign);
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
                    deleteObjectives(objective.id!, sign);
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

        <Component height="100px" borderBottom="solid 1px #eeeeee">
            <LabelComponent weight="bold" label="Objective" size="20pt" color="#333333" />
        </Component>

        <Component direction="column" paddingTop="10px">
            <Component height="70px" horizontalAlign="flex-start" verticalAlign="flex-end">
                <Component width="auto" height="auto">
                    <LabelComponent weight="bold" label="Goal" size="15pt" color="#333333" />
                </Component>
             </Component>

            <Component height="150px" verticalAlign="flex-start">
                <Component height="auto">
                    <TextComponent
                        value={objective.title}
                        placeholder="Insert your goal"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setObjective({...objective, title: event.target.value});
                        }}
                    />     
                </Component> 
            </Component>

            <Component height="70px" horizontalAlign="flex-start" verticalAlign="flex-end">
                <Component width="auto" height="auto">
                    <LabelComponent weight="bold" label="Description" size="15pt" color="#333333"/>
                </Component>
            </Component>

            <Component height="350px" verticalAlign="flex-start">
                <Component height="auto">
                    <TextareaComponent
                        value={objective.description}
                        placeholder="Tell me about what your goal is"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setObjective({...objective, description: event.target.value })
                        }}
                    />
                </Component>
            </Component>

            <Component height="70px" horizontalAlign="flex-start" verticalAlign="flex-end">
                <Component width="auto" height="auto">
                    <LabelComponent weight="bold" label="Priority" size="15pt" color="#333333"/>
                </Component>
            </Component>

            <Component height="150px" verticalAlign="flex-start">
                <Component height="auto">
                    <SelectComponent
                        value={objective.priorityId + ""}
                        options={[
                            { title: "Major", value: "1" },
                            { title: "Minor", value: "2" }
                        ]}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setObjective({...objective, priorityId: Number.parseInt(event.target.value)})
                        }} 
                    />
                </Component>
            </Component>

            <Component height="70px" horizontalAlign="flex-start" verticalAlign="flex-end">
                <Component width="auto" height="auto">
                    <LabelComponent weight="bold" label="Deadline" size="15pt" color="#333333" />
                </Component>
            </Component>

            <Component height="150px" verticalAlign="flex-start">
                <Component width="auto" height="auto">
                    <TextComponent 
                        value={year}
                        placeholder="year"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setYear(event.target.value);
                        }} 
                    />

                    <Component width="50%"/>

                    <TextComponent 
                        value={month}
                        placeholder="month"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setMonth(event.target.value);
                        }} 
                    />

                    <Component width="50%"/>

                    <TextComponent 
                        value={date}
                        placeholder="date"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDate(event.target.value);
                        }} 
                    />
                </Component>
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
            {buttons}
        </Component>
    </Component>

    return view;
}

export default ObjectiveHandleComponent;