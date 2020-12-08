import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Component from '../components/templates/Component'
import * as util from '../service/Utility'

import ObjectiveListComponent from '../components/organisms/ObjectiveListComponent'
import NavigationComponent from '../components/organisms/NavigationComponent'
import PlanListComponent from '../components/organisms/PlanLIstComponent'
import TodoListComponent from '../components/organisms/TodoListComponent'
import NotiComponent from '../components/atoms/NotiComponent'
import DialogComponent from '../components/templates/DialogComponent'
import ObjectiveHandleComponent from '../components/organisms/ObjectiveHandleComponent'
import SignComponent from '../components/organisms/SignComponent'

import usePage from '../redux/hooks/usePage'
import useNoti from '../redux/hooks/useNoti'
import useObjectives from '../redux/objectives/hook'
import { TemplateBuilder } from '../redux/stores/template';

interface MainProps {}

const MainLayout: React.FC<MainProps> = () => {
    const { getCenter, getTop, getDialog, getLeft, setCenter, setDialog } = usePage();
    const { getVisible } = useNoti();
    const { selectObjectives, getObjectives } = useObjectives();


    React.useEffect(() => {
        getObjectives(true);
    }, []);

    console.log(selectObjectives.data?.data);

    let noti = <></>;
    if(getVisible) {
        noti = <NotiComponent/>
    }

    let dialog = <></>;
    if(getDialog.component === "ObjectiveHandle") {
        dialog = <ObjectiveHandleComponent/>
    } else if(getDialog.component === "Sign") {
        dialog = <SignComponent/>
    }

    let top =
    <NavigationComponent
        leftButtons={[
            {
                theme: "outline-light", 
                text: "Objective", 
                onClick: () => { setCenter(new TemplateBuilder()
                    .display(true).component("ObjectiveList").build())} 
            },
            { 
                theme: "outline-light", 
                text: "Plan", 
                onClick: () => { setCenter(new TemplateBuilder()
                    .display(true).component("PlanList").build())} 
            },
            { 
                theme: "outline-light", 
                text: "Todo", 
                onClick: () => { setCenter(new TemplateBuilder()
                    .display(true).component("TodoList").build())} 
            }
        ]} 
        
        rightButtons={[
            { 
                theme: "primary", 
                text: "Login", 
                onClick: () => { setDialog(new TemplateBuilder().display(true).component("Sign").build())}
            }
        ]} 
    />


    let center = <></>;
    if(getCenter.component === "ObjectiveList") {
        center = <ObjectiveListComponent objectives={util.parse(selectObjectives.data?.data)}/>
    } else if(getCenter.component === "PlanList") {
        center = <PlanListComponent/>;
    } else if(getCenter.component === "TodoList") {
        center = <TodoListComponent/>;
    }

    let left = <></>;
    if(getLeft.component === "ObjectiveHandle") {
        left = <ObjectiveHandleComponent/>;
    }

    let view =
    <Component direction="column">
        {noti}
        <DialogComponent display={getDialog.display}>
            {dialog}
        </DialogComponent>
        <Component height="70px" display={(getTop.display) ? "flex" : "none"}>
            {top}
        </Component>
        <Component>
            <Component display="none" backgroundColor="#839203">

            </Component>
            <Component width="200%" maxWidth="60%" marginLeft="auto" marginRight="auto" overflowY="auto" display={(getCenter.display) ? "flex" : "none"}>
                {center}
            </Component>
            <Animation display={getLeft.display}>
                <Component width="80%" height="80%">
                    {left}
                </Component>
            </Animation>
        </Component>
    </Component>

    return view; 
}

const Animation = styled.div<{ display: boolean }>`
    display: flex;
    width: 0%;
    height: 100%;

    justify-content: center;
    align-items: center;

    ${(props) => { 
        if(props.display) {
            return css`
                animation: ${openAnim} 0.3s linear; 
                width: 50%;
            `
        } else {
            return css`
                animation: ${closeAnim} 0.3s linear;
                width: 0%;
            `
        }
    }}
`;

const openAnim = keyframes`
    0% { width: 0%; }
    100% { width: 50%; }
`;

const closeAnim = keyframes`
    0% { width: 50%; }
    100% { width: 0%; }
`;

export default MainLayout;