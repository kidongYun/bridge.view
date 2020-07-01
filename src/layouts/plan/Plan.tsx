import React from 'react'
import styled from 'styled-components'

/* Component */
import Timeline from '../../components/timeline/Timeline'

/* Service */
import * as data from '../../service/Data'

/* Model */
import CellType from '../../model/CellType'
import ModalType from '../../model/ModalType';

interface PlanProps {
    stage: string
    modal: ModalType
    setModal: (modal: ModalType) => void
}

const Plan = ({ stage, modal, setModal } : PlanProps) => {
    let view = <></>

    const [planList, setPlanList] = React.useState<CellType[]>(data.postPlanList());

    if(stage !== "Plan") {
        return(view)
    }

    view = 
    <Container>
        <Timeline cellList={planList} setCellList={setPlanList} modal={modal} setModal={setModal} />
    </Container>

    return (view)
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Plan;