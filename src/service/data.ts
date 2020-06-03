// import axios from 'axios'

import CellType from '../model/CellType';
import MenuType from '../model/MenuType';
import TabType from '../model/TabType';

export function postObjList() {
    // return axios.post('http://192.168.0.10/objective');

    let cellList: Array<CellType> = new Array();

    cellList.push(new CellType(0, 'title0', 'description0', 0, 'deadline0'))
    cellList.push(new CellType(1, 'title1', 'description1', 1, 'deadline1'))
    cellList.push(new CellType(2, 'title2', 'description2', 2, 'deadline2'))
    cellList.push(new CellType(3, 'title3', 'description3', 3, 'deadline3'))
    cellList.push(new CellType(4, 'title4', 'description4', 4, 'deadline4'))
    cellList.push(new CellType(5, 'title5', 'description5', 5, 'deadline5'))
    cellList.push(new CellType(6, 'title6', 'description6', 6, 'deadline6'))

    return cellList;
}

export function postHeaderMenuList(setStage : (stageName: string) => void, setLoginModalVisible: (visible: boolean) => void) {
    let menuList: Array<MenuType> = new Array();

    let leftTabList: Array<TabType> = new Array();
    leftTabList.push(new TabType('outline-light', 'Objective', () => { setStage("Objective")}));
    leftTabList.push(new TabType('outline-light', 'Plan', () => { setStage("Plan")}));
    leftTabList.push(new TabType('outline-light', 'Todo', () => { setStage("Todo")}));
    let leftMenu: MenuType = new MenuType('flex-start', leftTabList);

    let rightTabList: Array<TabType> = new Array();
    rightTabList.push(new TabType('primary', 'Login', () => { setLoginModalVisible(true)}));
    let rightMenu: MenuType = new MenuType('flex-end', rightTabList);

    menuList.push(leftMenu);
    menuList.push(rightMenu);

    return menuList;
}