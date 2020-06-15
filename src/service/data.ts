// import axios from 'axios'

import CellType from '../model/CellType';
import MenuType from '../model/MenuType';
import TabType from '../model/TabType';
import ObjCellType from '../model/ObjCellType';
import DateCellType from '../model/DateCellType';

export function postObjList() {
    // return axios.post('http://192.168.0.10/objective');

    let cellList: Array<CellType> = [];

    cellList.push(new DateCellType(20, new Date('2020-06-20')))
    cellList.push(new ObjCellType(0, 'title0', 'description0', 0, new Date('2020-06-20')))
    cellList.push(new ObjCellType(1, 'title1', 'description1', 1, new Date('2020-06-30')))
    cellList.push(new ObjCellType(2, 'title2', 'description2', 2, new Date('2020-07-10')))
    cellList.push(new DateCellType(20, new Date('2020-07-30')))
    cellList.push(new ObjCellType(3, 'title3', 'description3', 3, new Date('2020-07-20')))
    cellList.push(new ObjCellType(4, 'title4', 'description4', 4, new Date('2020-07-30')))
    cellList.push(new ObjCellType(4, 'title4', 'description4', 4, new Date('2020-07-30')))
    cellList.push(new ObjCellType(4, 'title4', 'description4', 4, new Date('2020-07-30')))
    cellList.push(new DateCellType(20, new Date('2020-08-10')))
    cellList.push(new ObjCellType(5, 'title5', 'description5', 5, new Date('2020-08-10')))
    cellList.push(new DateCellType(20, new Date('2020-08-20')))
    cellList.push(new ObjCellType(6, 'title6', 'description6', 6, new Date('2020-08-20')))

    return cellList;
}

export function postHeaderMenuList(setStage : (stageName: string) => void, setLoginModalVisible: (visible: boolean) => void) {
    let menuList: Array<MenuType> = [];

    let leftTabList: Array<TabType> = [];
    leftTabList.push(new TabType('outline-light', 'Objective', () => { setStage("Objective")}));
    leftTabList.push(new TabType('outline-light', 'Plan', () => { setStage("Plan")}));
    leftTabList.push(new TabType('outline-light', 'Todo', () => { setStage("Todo")}));
    let leftMenu: MenuType = new MenuType('flex-start', leftTabList);

    let rightTabList: Array<TabType> = [];
    rightTabList.push(new TabType('primary', 'Login', () => { setLoginModalVisible(true)}));
    let rightMenu: MenuType = new MenuType('flex-end', rightTabList);

    menuList.push(leftMenu);
    menuList.push(rightMenu);

    return menuList;
}