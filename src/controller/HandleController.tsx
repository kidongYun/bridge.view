import React from 'react'
import PopupHandleComponent from '../components/dependence/PopupHandleComponent';
import PopinHandleComponent from '../components/molecules/PopinHandleComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility'


import useHandle from '../hooks/useHandle';
import useNoti from '../hooks/useNoti';
import useData from '../hooks/useData';
import useSign from '../hooks/useSign';
import useCell from '../hooks/useCell';

import ObjectiveType from '../model/ObjectiveType';

// import { TextProps, ButtonProps, FormProps } from '../components/props'

const HandleController = () => {
    // const { 
    //     handle_name, 
    //     handle_visible, 
    //     handle_onHide,
    //     handle_onType
    // } = useHandle();

    // const { 
    //     data_objectiveList,
    //     data_planList,
    //     data_onSetObjectiveList,
    //     data_onSetPlanList
    // } = useData();

    // const { 
    //     onShowNoti, 
    //     onHideNoti 
    // } = useNoti();

    // const { 
    //     cellStartDateTime,
    //     cellEndDateTime,
    //     subjectId, 
    //     subjectStatus, 
    //     objectiveTitle, 
    //     objectiveDescription, 
    //     objectivePriority,
    //     planObjectiveId,
    //     planContent,
    //     onSetCellStartDateTime,
    //     onSetCellEndDateTime,
    //     onSetObjectiveTitle,
    //     onSetObjectiveDescription,
    //     onSetObjectivePriority,
    //     onSetPlanContent
    // } = useCell();

    // const { 
    //     sign_desc, 
    //     sign_email, 
    //     sign_password, 
    //     sign_onUpdateStatus, 
    //     sign_onUpdateDesc, 
    //     sign_onUpdateEmail, 
    //     sign_onUpdatePassword 
    // } = useSign();

    // let title: TextProps;
    // let forms: FormProps[];
    // let buttons: ButtonProps[];
    
    // if(!handle_visible){
    //     return <></>;
    // }

    // if(handle_name === "OBJECTIVE_POST") {
    //     title = { text:"CREATE OBJECTIVE" }
    //     forms = [
    //         { 
    //             type: "TEXT", 
    //             placeholder: "TITLE",
                // onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                //     const { value } = event.target;
                //     onSetObjectiveTitle(value);
                // }
    //         },
    //         { 
    //             type: "TEXTAREA", 
    //             placeholder: "DESCRIPTION", 
    //             rows: "10",
    //             onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    //                 const { value } = event.target;
    //                 onSetObjectiveDescription(value);
    //             }
    //         },
    //         { 
    //             type: "LABEL",
    //             value: "Priority" 
    //         },
    //         { 
    //             type: "SELECT",
    //             options: [
    //                 { title: "Major", value: "1" },
    //                 { title: "Minor", value: "2" }
    //             ],
    //             onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    //                 const { value } = event.target;
    //                 onSetObjectivePriority(Number.parseInt(value));
    //             }
    //         },
    //         { 
    //             type: "LABEL",
    //             value: "Deadline"
    //         },
    //         { 
    //             type: "TEXT",
    //             placeholder: "2020-07-21",
    //             onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    //                 const { value } = event.target;
    //                 console.log("KIDONG : " + value);
    //                 onSetCellEndDateTime(value);
    //             }
    //         }
    //     ]
    //     buttons = [
    //         {
    //             text: "Close",
    //             type: "secondary",
    //             onClick:() => {
    //                 handle_onHide();
    //             }
    //         },
    //         { 
    //             text: "Add", 
    //             type: "primary", 
    //             onClick:() => {
    //                 const objPost = {
    //                     title: objectiveTitle,
    //                     description: objectiveDescription,
    //                     endDateTime: cellEndDateTime,
    //                     priority: objectivePriority,
    //                     status: 0,
    //                     date: true
    //                 }

    //                 console.log(cellEndDateTime);
            
    //                 data.postObj(objPost).then((response) => {
    //                     if(response.data.errorCode !== 200) {
    //                         onShowNoti("warning", "Failure to add new objective.");
    //                         setTimeout(onHideNoti, 2300);
    //                         return;
    //                     }

    //                     data.getObj(true).then((response) => {
    //                         if(response.data.errorCode !== 200) {
    //                             onShowNoti("warning", "It's warning");
    //                             setTimeout(onHideNoti, 2300);
    //                             return;
    //                         }

    //                         data_onSetObjectiveList(utility.parse(response.data.data));
                        
    //                         handle_onHide();
    //                         onShowNoti("success", "It's from Add Modal");
    //                         setTimeout(onHideNoti, 2300);
    //                     })
    //                 })
    //             }
    //         }
    //     ]

    //     if(window.innerWidth > 900) {
    //         handle_onType("POPIN");
    //         return <PopinHandleComponent
    //             title={title}
    //             forms={forms}
    //             buttons={buttons}
    //         />

    //     } else {
    //         handle_onType("POPUP");
    //         return <PopupHandleComponent
    //             title={title}
    //             forms={forms}
    //             buttons={buttons}
    //         />
    //     }
    // }

    // if(handle_name === "OBJECTIVE_PUT") {
    //     title = { text: "UPDATE OBJECTIVE" }
    //     forms = [
    //         { 
    //             type: "TEXT",
    //             value: objectiveTitle,
    //             placeholder: "TITLE",
    //             onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    //                 const { value } = event.target;
    //                 onSetObjectiveTitle(value);
    //             }
    //         },
    //         { 
    //             type: "TEXTAREA", 
    //             value: objectiveDescription,
    //             placeholder: "DESCRIPTION", 
    //             rows: "10",
    //             onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    //                 const { value } = event.target;
    //                 onSetObjectiveDescription(value);
    //             }
    //         },
    //         { 
    //             type: "LABEL",
    //             value: "Priority" 
    //         },
    //         { 
    //             type: "SELECT",
    //             value: objectivePriority + "",
    //             options: [
    //                 { title: "Major", value: "1" },
    //                 { title: "Minor", value: "2" }
    //             ],
    //             onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    //                 const { value } = event.target;
    //                 onSetObjectivePriority(Number.parseInt(value));
    //             }
    //         },
    //         { 
    //             type: "LABEL",
    //             value: "Deadline"
    //         },
    //         { 
    //             type: "TEXT",
    //             value: cellEndDateTime.substring(0, 10),
    //             placeholder: "2020-07-21",
    //             onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    //                 const { value } = event.target;
    //                 onSetCellEndDateTime(value);
    //             }
    //         }
    //     ]
    //     buttons = [
    //         {
    //             text: "Close",
    //             type: "secondary",
    //             onClick: () => {
    //                 handle_onHide();
    //             }
    //         },
    //         { 
    //             text: "Update",
    //             type: "primary",
    //             onClick: () => {
    //                 const objPut = {
    //                     id: subjectId,
    //                     title: objectiveTitle,
    //                     description: objectiveDescription,
    //                     endDateTime: cellEndDateTime,
    //                     priority: objectivePriority,
    //                     status: subjectStatus,
    //                     date: true
    //                 }

    //                 data.putObj(objPut).then((response) => {
    //                     /** 실패한 경우 */
    //                     if(response.data.errorCode !== 200) {

    //                     }

    //                     data.getObj(true).then((response) => {
    //                         /** 실패한 경우 */
    //                         if(response.data.errorCode !== 200) {
    //                             handle_onHide();
    //                             onShowNoti("success", "It's from Add Modal");
    //                             setTimeout(onHideNoti, 2300);
    //                         }

    //                         data_onSetObjectiveList(utility.parse(response.data.data));
                    
    //                         handle_onHide();
    //                         onShowNoti("success", "It's from Add Modal");
    //                         setTimeout(onHideNoti, 2300);
    //                     })
    //                 })
    //             }
    //         },
    //         {
    //             text: "Remove",
    //             type: "danger",
    //             onClick: () => {
    //                 const objDelete = {
    //                     id: subjectId,
    //                     date: true
    //                 }
                
    //                 data.deleteObj(objDelete).then((response) => {
    //                     if(response.data.errorCode !== 200) {
    //                         return;
    //                     }

    //                     data.getObj(true).then((response) => {
    //                         if(response.data.errorCode !== 200) {
    //                             handle_onHide();
    //                             onShowNoti("warning", "제거 후 데이터를 가져오지 못했습니다.");
    //                             setTimeout(onHideNoti, 2300);
    //                         }

    //                         data_onSetObjectiveList(utility.parse(response.data.data));
                
    //                         handle_onHide();
    //                         onShowNoti("success", "제거되었습니다.");
    //                         setTimeout(onHideNoti, 2300);
    //                     });
    //                 })
    //             }
    //         }
    //     ]

    //     if(window.innerWidth > 900) {
    //         handle_onType("POPIN");
    //         return <PopinHandleComponent
    //             title={title}
    //             forms={forms}
    //             buttons={buttons}
    //         />

    //     } else {
    //         handle_onType("POPUP");
    //         return <PopupHandleComponent
    //             title={title}
    //             forms={forms}
    //             buttons={buttons}
    //         />
    //     }
    // }

    // if(handle_name === "PLAN") {
    //     const objectiveList = data_objectiveList as ObjectiveType[];
        
    //     let selected: number = 0;
    //     objectiveList.map((obj) => {
    //         if(planObjectiveId === obj.id) {
    //             selected = obj.id;
    //         }
    //     });

    //     title = { text:"Modify Plan" };
    //     forms = [
    //         {
    //             type: "TEXTAREA",
    //             value: planContent,
    //             rows: "10",
    //             onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    //                 const { value } = event.target;
    //                 onSetPlanContent(value);
    //             }
    //         },
    //         {
    //             type: "SELECT",
    //             value: selected + "",
    //             options: objectiveList.map((obj) => {
    //                 return { title: obj.title, value: obj.id + "" }
    //             })
    //         },
    //         {
    //             type: "SELECT",
    //             options: [
    //                 { title: cellStartDateTime, value: cellStartDateTime }
    //             ]
    //         }
    //     ]
    //     buttons = [
    //         { 
    //             text: "Close", 
    //             type: "secondary", 
    //             onClick:() => { 
    //                 handle_onHide();
    //             } 
    //         },
    //         {
    //             text: "Modify",
    //             type: "primary",
    //             onClick:() => {

    //                 const planPut = {
    //                     id: subjectId,
    //                     objectiveId: selected,
    //                     content: planContent,
    //                     startDateTime: cellStartDateTime,
    //                     status: 0
    //                 }
        
    //                 data.putPlan(planPut).then((response) => {
    //                     /* PLAN 업데이트 실패한 경우 */
    //                     if(response.data.errorCode !== 200) {
    //                         onShowNoti("warning", "It's fail to update the data");
    //                         setTimeout(onHideNoti, 2300);
    //                         return;
    //                     }

    //                     data.getPlan(true).then((response) => {
    //                         /* PLAN 업데이트 후 데이터 가져오기 실패한 경우 */
    //                         if(response.data.errorCode !== 200) {
    //                             onShowNoti("warning", "It's fail to get the data");
    //                             setTimeout(onHideNoti, 2300);
    //                             return;
    //                         }

    //                         data_onSetPlanList(utility.parse(response.data.data));
                    
    //                         handle_onHide();
    //                         onShowNoti("success", "계획이 수정되었습니다.");
    //                         setTimeout(onHideNoti, 2300);
    //                     })
    //                 })
    //             }
    //         }
    //     ]

    //     if(window.innerWidth > 900) {
    //         handle_onType("POPIN");
    //         return <PopinHandleComponent
    //             title={title}
    //             forms={forms}
    //             buttons={buttons}
    //         />
    //     } else {
    //         handle_onType("POPUP");
    //         return <PopupHandleComponent
    //             title={title}
    //             forms={forms}
    //             buttons={buttons}
    //         />
    //     }
    // }

    return <></>;
}

export default HandleController;