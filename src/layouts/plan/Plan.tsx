import React from 'react'
import styled from 'styled-components'

/* Component */
import Timeline from '../../components/timeline/Timeline'

/* Service */
import * as data from '../../service/data'

/* Model */
import CellType from '../../model/CellType'

interface PlanProps {
    stage: string
}

const Plan = ({ stage } : PlanProps) => {
    let view = <></>

    const [planList, setPlanList] = React.useState<CellType[]>(data.postPlanList());

    if(stage !== "Plan") {
        return(view)
    }

    view = 
    <Container>
        {/* <Timeline cellList={planList} setRemoveModalVisible={() => undefined} remove={() => undefined} /> */}
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