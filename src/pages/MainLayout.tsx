import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import Component from '../components/templates/Component'
import * as util from '../service/Utility'

import ObjectiveListComponent from '../components/organisms/ObjectiveListComponent'
import NavigationComponent from '../components/organisms/NavigationComponent'
import PlanListComponent from '../components/organisms/PlanListComponent'
import TodoListComponent from '../components/organisms/TodoListComponent'
import NotiComponent from '../components/atoms/NotiComponent'
import DialogComponent from '../components/templates/DialogComponent'
import ObjectiveHandleComponent from '../components/organisms/ObjectiveHandleComponent'
import PlanHandleComponent from '../components/organisms/PlanHandleComponent'
import SignComponent from '../components/organisms/SignComponent'

import usePage from '../redux/page/hook'
import useNoti from '../redux/noti/hook'
import usePlans from '../redux/plans/hook'
import { TemplateBuilder } from '../redux/stores/template';

interface MainProps {}

const MainLayout: React.FC<MainProps> = () => {
    const { selectPage, setCenter, setDialog } = usePage();
    const { selectNoti } = useNoti();
    const { selectPlans } = usePlans();

    let noti = <></>;
    if(selectNoti.visible) {
        noti = <NotiComponent/>
    }

    let dialog = <></>;
    if(selectPage.dialog.component === "ObjectiveHandle") {
        dialog = <ObjectiveHandleComponent/>
    } else if(selectPage.dialog.component === "Sign") {
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
    if(selectPage.center.component === "ObjectiveList") {
        center = <ObjectiveListComponent/>
    } else if(selectPage.center.component === "PlanList") {
        center = <PlanListComponent/>;
    } else if(selectPage.center.component === "TodoList") {
        center = <TodoListComponent/>;
    }

    let left = <></>;
    if(selectPage.left.component === "ObjectiveHandle") {
        left = <ObjectiveHandleComponent/>;
    } else if(selectPage.left.component === "PlanHandle") {
        left = <PlanHandleComponent/>;
    }

    let view =
    <Component direction="column">
        {noti}
        <DialogComponent display={selectPage.dialog.display}>
            {dialog}
        </DialogComponent>
        <Component height="70px" display={(selectPage.top.display) ? "flex" : "none"}>
            {top}
        </Component>
        <Component>
            <Component display="none" backgroundColor="#839203">

            </Component>
            <Component width="200%" maxWidth="60%" marginLeft="auto" marginRight="auto" overflowY="auto" display={(selectPage.center.display) ? "flex" : "none"}>
                {center}
            </Component>
            <Animation display={selectPage.left.display}>
                <Component width="80%" height="80%" borderLeft="1px solid #eeeeee">
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