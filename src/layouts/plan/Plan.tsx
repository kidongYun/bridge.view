import React from 'react'
import styled from 'styled-components'

/* Component */
import Timeline from '../../components/timeline/Timeline'

/* Service */
import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

/* Model */
import CellType from '../../model/CellType'

import useStage from '../../hooks/useStage';

const Plan = () => {
    let view = <></>

    const { name } = useStage();

    const [planList, setPlanList] = React.useState<CellType[]>([]);

    React.useEffect(() => {
        data.getPlan().then((response) => {
            setPlanList(utility.parse(response.data))
        })
    }, [])

    if(name !== "PLAN") {
        return(view)
    }

    view = 
    <Container>
        <Timeline cellList={planList} />
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