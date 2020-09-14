import React from 'react'
import ObjectiveModal from './ObjectiveModal'
import SignModal from './SignModal';
import RemoveModal from './RemoveModal';

import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

import useModal from '../../hooks/useModal';
import useSubject from '../../hooks/useSubject';
import useNoti from '../../hooks/useNoti';
import useData from '../../hooks/useData';

import ObjectiveType from '../../model/ObjectiveType';

const Modal = () => {
    const { type, visible, onHideModal } = useModal();
    const { updatedSubject, deletedSubject } = useSubject();
    const { onShowNoti, onHideNoti } = useNoti();
    const { onSetObjectiveList } = useData();

    let view = <></>

    if(!visible){
        return view;
    }

    if(type === "LOGIN") {
        view = <SignModal buttons={[
            {
                text:"Close", 
                type:"secondary", 
                onClick:() => {
                    onHideModal();
                }
            },
            { 
                text:"Sign In", 
                type:"primary", 
                onClick:() => {
                    onShowNoti("success", "It's from Login Modal");
                    setTimeout(onHideNoti, 2300);
                    onHideModal(); 
                }
            },
            { 
                text:"Sign Up", 
                type:"primary", 
                onClick:() => {
                    onShowNoti("success", "It's from Login Modal");
                    setTimeout(onHideNoti, 2300);
                    onHideModal(); 
                } 
            }
        ]}/>
    }

    if(type === "OBJECTIVE_POST") {
        console.log(updatedSubject);
        view = <ObjectiveModal 
            obj={ updatedSubject as ObjectiveType } 
            buttons={[
                {
                    text: "Close",
                    type: "secondary",
                    onClick:() => {
                        onHideModal();
                    }
                },
                { 
                    text: "Add", 
                    type:"primary", 
                    onClick:(params) => {
                        const objPost = params
                
                        data.postObj(objPost).then((response) => {
                            if(response.data.error === "SUCCESS") {
                                data.getObj(true).then((response) => {
                                    onSetObjectiveList(utility.parse(response.data.cells));
                            
                                    onHideModal();
                                    onShowNoti("success", "It's from Add Modal");
                                    setTimeout(onHideNoti, 2300);
                                })
                            }
                        })
                    }
                }
            ]}
        />
    }

    if(type === "OBJECTIVE_PUT") {
        view = <ObjectiveModal 
        obj={ updatedSubject as ObjectiveType }
        buttons={[
            {
                text: "Close",
                type: "secondary",
                onClick: () => {
                    onHideModal();
                }
            },
            { 
                text: "Update",
                type: "primary",
                onClick: (params) => {
                    const objPut = {
                        id: params.id!,
                        title: params.title,
                        description: params.description,
                        dateTime: params.dateTime,
                        priority: params.priority,
                        status: params.status,
                        date: true
                    }
        
                    data.putObj(objPut).then((response) => {
                        if(response.data.error === "SUCCESS") {
                            data.getObj(true).then((response) => {
                                onSetObjectiveList(utility.parse(response.data.cells));
                        
                                onHideModal();
                                onShowNoti("success", "It's from Add Modal");
                                setTimeout(onHideNoti, 2300);
                            })
                        }
                    })
                }
            }
        ]}
    />
    }

    if(type === "REMOVE") {
        view = <RemoveModal buttons={[
            { 
                text:"Close", 
                type:"secondary", 
                onClick:() => { 
                    onHideModal();
                } 
            },
            { 
                text:"Remove", 
                type:"primary", 
                onClick:() => {
                    const objDelete = {
                        id: deletedSubject.id,
                        date: true
                    }
                
                    data.deleteObj(objDelete).then((response) => {
                        if(response.data.error === "SUCCESS") {
                            data.getObj(true).then((response) => {
                                onSetObjectiveList(utility.parse(response.data.cells));
                    
                                onHideModal();
                                onShowNoti("success", "It's from Add Modal");
                                setTimeout(onHideNoti, 2300);
                            })
                        }
                    })
                } 
            }
        ]}/>
    }

    return view
}

export default Modal;