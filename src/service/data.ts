import axios from 'axios'

import MenuType from '../model/MenuType';
import TabType from '../model/TabType';
import ObjectiveType from '../model/ObjectiveType';

export async function getPlan() {
    return await axios.get("http://localhost:8080/plan");
}

export async function getObj() {
    return await axios.get("http://localhost:8080/objective");
}

export async function postObj(obj: ObjectiveType) {
    return await axios.post("http://localhost:8080/objective", obj);
}

export async function putObj(obj: ObjectiveType) {
    return await axios.put("http://localhost:8080/objective", obj);
}

export async function deleteObj(id: number) {
    return await axios.delete("http://localhost:8080/objective/" + id);
}

export function postNavList() {
    let menuList: Array<MenuType> = [];

    let leftMenu: MenuType = new MenuType('flex-start', [])
    leftMenu.tabs.push(new TabType('outline-light', 'Objective', 'OBJECTIVE'))
    leftMenu.tabs.push(new TabType('outline-light', 'Plan', 'PLAN'))
    leftMenu.tabs.push(new TabType('outline-light', 'Todo', 'TODO'))

    let rightMenu: MenuType = new MenuType('flex-end', []);

    rightMenu.tabs.push(new TabType('primary', 'Login', 'LOGIN'))

    menuList.push(leftMenu);
    menuList.push(rightMenu);

    return menuList;
}