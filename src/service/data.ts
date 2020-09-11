import axios from 'axios'

import MenuType from '../model/MenuType';

import { TabBuilder } from '../model/TabBuilder';

export async function getPlan() {
    return await axios.get("http://localhost:8080/plan");
}

export async function getObj(date: boolean) {
    return await axios.get("http://localhost:8080/objective", { params: { date: date }});
}

export async function postObj(objPost: { 
    title: string, 
    description: string, 
    dateTime: string, 
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
    dateTime: string,
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

export function postNavList() {
    let menuList: Array<MenuType> = [];

    let leftMenu: MenuType = new MenuType('flex-start', [])
    leftMenu.tabs.push(new TabBuilder().type('outline-light').title('Objective').event('OBJECTIVE').build());
    leftMenu.tabs.push(new TabBuilder().type('outline-light').title('Plan').event('PLAN').build());
    leftMenu.tabs.push(new TabBuilder().type('outline-light').title('Todo').event('TODO').build());

    let rightMenu: MenuType = new MenuType('flex-end', []);

    rightMenu.tabs.push(new TabBuilder().type('primary').title('Login').event('LOGIN').build());

    menuList.push(leftMenu);
    menuList.push(rightMenu);

    return menuList;
}