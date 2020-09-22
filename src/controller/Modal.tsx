import React from 'react'
import ObjectiveModal from '../components/modal/ObjectiveModal'
import ModalComponent from '../components/modal/ModalComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility'

import useModal from '../hooks/useModal';
import useSubject from '../hooks/useSubject';
import useNoti from '../hooks/useNoti';
import useData from '../hooks/useData';
import useSign from '../hooks/useSign';
import useObjective from '../hooks/useObjective';

import ObjectiveType from '../model/ObjectiveType';

const ModalController = () => {
    const { type, visible, onHideModal } = useModal();
    const { updatedSubject, deletedSubject } = useSubject();
    const { onShowNoti, onHideNoti } = useNoti();
    const { onSetObjectiveList } = useData();
    const { desc, email, password, onUpdateStatus, onUpdateDesc, onUpdateEmail, onUpdatePassword } = useSign();
    const { onSetTitle, onSetDesc, onSetPriority, onSetDeadline } = useObjective();

    let view = <></>;
    
    if(!visible){
        return view;
    }

    if(type === "SIGN") {
        view = 
        <ModalComponent 
            title={{ text: "SIGN" }}
            forms={[
                { 
                    type:"TEXT", 
                    placeholder:"EMAIL", 
                    onChange:(event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        onUpdateEmail(value);
                    }
                },
                { 
                    type:"TEXT", 
                    placeholder:"PASSWORD", 
                    onChange:(event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        onUpdatePassword(value);
                    } 
                },
                { 
                    type:"LABEL", 
                    value: desc
                }
            ]}
            buttons={[
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
                        const params = {
                            email: email,
                            password: password
                        }

                        data.signIn(params).then((response) => {
    
                            /* 로그인 실패한 경우 */
                            if(response.data.error !== "SUCCESS") {
                                onUpdateStatus(false);
                                onUpdateDesc(response.data.errorDesc);
                                return;
                            }
    
                            onUpdateStatus(true);
                            onUpdateEmail(params.email);
    
                            onShowNoti("success", "로그인되었습니다.");
                            setTimeout(onHideNoti, 2300);
                            onHideModal();
                        })
                    }
                },
                { 
                    text:"Sign Up", 
                    type:"primary", 
                    onClick:() => {
                        const params = {
                            email: email,
                            password: password
                        }

                        data.signUp(params).then((response) => {
                            console.log(response.data.error);
    
                            if(response.data.error === "SUCCESS") {
                                onShowNoti("success", "가입이 완료되었습니다.");
                                setTimeout(onHideNoti, 2300);
                                onHideModal(); 
                            }
                        })
                    } 
                }
            ]}
        />
    }

    if(type === "OBJECTIVE_POST") {
        view = 
        <ModalComponent
            title={{ text:"CREATE OBJECTIVE" }}
            forms={[
                { 
                    type: "TEXT", 
                    placeholder: "TITLE",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;

                        console.log("title : " + value);
                        onSetTitle(value);
                    }
                },
                { 
                    type: "TEXTAREA", 
                    placeholder: "DESCRIPTION", 
                    rows: "10",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;

                        console.log("description : " + value);
                        onSetDesc(value);
                    }
                },
                { 
                    type: "LABEL",
                    value: "Priority" 
                },
                { 
                    type: "SELECT",
                    options: [
                        { title: "title1", value: "value1" },
                        { title: "title2", value: "value2" }
                    ],
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;

                        console.log("priority : " + value);
                        onSetPriority(Number.parseInt(value));
                    }
                },
                { 
                    type: "LABEL",
                    value: "Deadline"
                },
                { 
                    type: "TEXT",
                    placeholder: "2020-07-21",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;

                        console.log("deadline : " + value);
                        onSetDeadline(value);
                    }
                }
            ]}
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

    // if(type === "OBJECTIVE_POST") {
    //     view = <ObjectiveModal 
    //         obj={ updatedSubject as ObjectiveType } 
    //         buttons={[
    //             {
    //                 text: "Close",
    //                 type: "secondary",
    //                 onClick:() => {
    //                     onHideModal();
    //                 }
    //             },
    //             { 
    //                 text: "Add", 
    //                 type:"primary", 
    //                 onClick:(params) => {
    //                     const objPost = params
                
    //                     data.postObj(objPost).then((response) => {
    //                         if(response.data.error === "SUCCESS") {
    //                             data.getObj(true).then((response) => {
    //                                 onSetObjectiveList(utility.parse(response.data.cells));
                            
    //                                 onHideModal();
    //                                 onShowNoti("success", "It's from Add Modal");
    //                                 setTimeout(onHideNoti, 2300);
    //                             })
    //                         }
    //                     })
    //                 }
    //             }
    //         ]}
    //     />
    // }

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
        view = 
        <ModalComponent
            title={{ text: "Remove" }}
            forms={[ { type: "LABEL", value: "Do you want to remove this surely?"} ]}
            buttons={[
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
            ]}
        />
    }

    return view;
}

export default ModalController;