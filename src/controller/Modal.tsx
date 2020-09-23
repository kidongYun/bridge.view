import React from 'react'
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
    const { subject_updated, subject_deleted } = useSubject();
    const { onShowNoti, onHideNoti } = useNoti();
    const { data_onSetObjectiveList } = useData();
    const { sign_desc, sign_email, sign_password, sign_onUpdateStatus, sign_onUpdateDesc, sign_onUpdateEmail, sign_onUpdatePassword } = useSign();
    const { obj_title, obj_desc, obj_priority, obj_deadline, obj_onSetTitle, obj_onSetDesc, obj_onSetPriority, obj_onSetDeadline } = useObjective();

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
                        sign_onUpdateEmail(value);
                    }
                },
                { 
                    type:"TEXT", 
                    placeholder:"PASSWORD", 
                    onChange:(event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        sign_onUpdatePassword(value);
                    } 
                },
                { 
                    type:"LABEL", 
                    value: sign_desc
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
                            email: sign_email,
                            password: sign_password
                        }

                        data.signIn(params).then((response) => {
    
                            /* 로그인 실패한 경우 */
                            if(response.data.error !== "SUCCESS") {
                                sign_onUpdateStatus(false);
                                sign_onUpdateDesc(response.data.errorDesc);
                                return;
                            }
    
                            sign_onUpdateStatus(true);
                            sign_onUpdateEmail(params.email);
    
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
                            email: sign_email,
                            password: sign_password
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
                        obj_onSetTitle(value);
                    }
                },
                { 
                    type: "TEXTAREA", 
                    placeholder: "DESCRIPTION", 
                    rows: "10",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetDesc(value);
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
                        obj_onSetPriority(Number.parseInt(value));
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
                        obj_onSetDeadline(value);
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
                    onClick:() => {

                        const objPost = {
                            title: obj_title,
                            description: obj_desc,
                            dateTime: obj_deadline,
                            priority: obj_priority,
                            status: 0,
                            date: true
                        }
                
                        data.postObj(objPost).then((response) => {
                            if(response.data.error === "SUCCESS") {
                                data.getObj(true).then((response) => {
                                    data_onSetObjectiveList(utility.parse(response.data.cells));
                            
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
        let obj = subject_updated as ObjectiveType;

        view =
        <ModalComponent
            title={{ text: "UPDATE OBJECTIVE" }}
            forms={[
                { 
                    type: "TEXT", 
                    value: obj.title,
                    placeholder: "TITLE",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetTitle(value);
                    }
                },
                { 
                    type: "TEXTAREA", 
                    value: obj.description,
                    placeholder: "DESCRIPTION", 
                    rows: "10",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetDesc(value);
                    }
                },
                { 
                    type: "LABEL",
                    value: "Priority" 
                },
                { 
                    type: "SELECT",
                    value: "value2",
                    options: [
                        { title: "title1", value: "value1" },
                        { title: "title2", value: "value2" }
                    ],
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
                        obj_onSetPriority(Number.parseInt(value));
                    }
                },
                { 
                    type: "LABEL",
                    value: "Deadline"
                },
                { 
                    type: "TEXT",
                    value: obj.dateTime,
                    placeholder: "2020-07-21",
                    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = event.target;
        
                        console.log("deadline : " + value);
                        obj_onSetDeadline(value);
                    }
                }
            ]}
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
                            id: subject_updated.id,
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
                                    data_onSetObjectiveList(utility.parse(response.data.cells));
                            
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
                            id: subject_deleted.id,
                            date: true
                        }
                    
                        data.deleteObj(objDelete).then((response) => {
                            if(response.data.error === "SUCCESS") {
                                data.getObj(true).then((response) => {
                                    data_onSetObjectiveList(utility.parse(response.data.cells));
                        
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