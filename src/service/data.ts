import axios from 'axios'

import MenuType, { MenuBuilder } from '../model/MenuType';

import { TabBuilder } from '../model/TabType';

export async function getTodo(date: boolean, startDateTime: string, endDateTime: string) {
    return await axios.get("http://localhost:8080/todo", { params: { date: date, startDateTime: startDateTime, endDateTime: endDateTime }});
}

export async function getPlan(date: boolean) {
    return await axios.get("http://localhost:8080/plan", { params: { date: date }});
}

export async function putPlan(planPut: {
    id: number,
    objectiveId: number,
    content: string,
    startDateTime: string,
    status: number
}) {
    return await axios.put("http://localhost:8080/plan/" + planPut.id, planPut);
}

export async function getObj(date: boolean) {
    return await axios.get("http://localhost:8080/objective", { params: { date: date }});
}

export async function postObj(objPost: { 
    title: string, 
    description: string, 
    endDateTime: string, 
    priority: number, 
    status: number, 
    date: boolean 
}) {
    return await axios.post("http://localhost:8080/objective", objPost);
}

export async function putObj(objPut: {
    id: number,
    title: string,
    description: string,
    endDateTime: string,
    priority: number,
    status: number,
    date: boolean
}) {
    return await axios.put("http://localhost:8080/objective/" + objPut.id, objPut);
}

export async function deleteObj(objDelete: {
    id: number, 
    date: boolean
}) {
    return await axios.delete("http://localhost:8080/objective/" + objDelete.id, { data: objDelete });
}

export async function signIn(signIn: {
    email: string,
    password: string
}) {
    return await axios.post("http://localhost:8080/signIn", signIn);
}

export async function signUp(signUp: {
    email: string,
    password: string
}) {
    return await axios.post("http://localhost:8080/signUp", signUp);
}

export async function sign() {
    return await axios.get("http://localhost:8080/sign");
}

export async function signOut() {
    return await axios.get("http://localhost:8080/signOut");
}

export function postNavList() {
    let menuList: Array<MenuType> = [];

    let leftMenu: MenuType = new MenuBuilder().build();
    leftMenu.tabs.push(new TabBuilder().type('outline-light').title('Objective').event('OBJECTIVE').build());
    leftMenu.tabs.push(new TabBuilder().type('outline-light').title('Plan').event('PLAN').build());
    leftMenu.tabs.push(new TabBuilder().type('outline-light').title('Todo').event('TODO').build());

    let rightMenu: MenuType = new MenuBuilder().align('flex-end').build();
    rightMenu.tabs.push(new TabBuilder().type('primary').title('Login').event('LOGIN').build());

    menuList.push(leftMenu);
    menuList.push(rightMenu);

    return menuList;
}