import axios from 'axios'

import CellType from '../model/CellType';
import MenuType from '../model/MenuType';
import TabType from '../model/TabType';
import ObjCellType from '../model/ObjCellType';
import PlanCellType from '../model/PlanCellType';
import DateCellType from '../model/DateCellType';
import ModalType from '../model/ModalType';
import { async } from 'q';
import Header from '../layouts/header/Header';


export function postPlanList() {
    let planList: Array<CellType> = [];

    planList.push(new DateCellType(20, new Date('2020-01')))
    planList.push(new PlanCellType(0, 'title0'))
    planList.push(new DateCellType(20, new Date('2020-02')))
    planList.push(new DateCellType(20, new Date('2020-03')))
    planList.push(new DateCellType(20, new Date('2020-04')))
    planList.push(new DateCellType(20, new Date('2020-05')))
    planList.push(new DateCellType(20, new Date('2020-06')))
    planList.push(new DateCellType(20, new Date('2020-07')))
    planList.push(new DateCellType(20, new Date('2020-08')))
    planList.push(new DateCellType(20, new Date('2020-09')))
    planList.push(new DateCellType(20, new Date('2020-10')))
    planList.push(new DateCellType(20, new Date('2020-11')))
    planList.push(new DateCellType(20, new Date('2020-12')))

    return planList;
}

export async function getObj() {
    return await axios.get("http://localhost:8080/getObj");
}

export async function postObj() {
    return await axios.post("http://localhost:8080/postObj");
}

export async function putObj(obj: ObjCellType) {
    return await axios.put("http://localhost:8080/putObj", obj);
}

export function postNavList(modal: ModalType, setModal: (modal: ModalType) => void, setStage : (name: string) => void) {
    let menuList: Array<MenuType> = [];

    let leftMenu: MenuType = new MenuType('flex-start', [])
    leftMenu.tabs.push(new TabType('outline-light', 'Objective', () => { setStage("Objective")}))
    leftMenu.tabs.push(new TabType('outline-light', 'Plan', () => { setStage("Plan")}))
    leftMenu.tabs.push(new TabType('outline-light', 'Todo', () => { setStage("Todo")}))

    let rightMenu: MenuType = new MenuType('flex-end', []);
    rightMenu.tabs.push(new TabType('primary', 'Login', () => { setModal({...modal, type:"Login", isShow: true})}))

    menuList.push(leftMenu);
    menuList.push(rightMenu);

    return menuList;
}