import React from 'react'
import styled from 'styled-components'

/* Service */
import * as data from '../../service/Data'
import * as utility from '../../service/Utility'

/* Component */
import Timeline from '../../components/timeline/Timeline'
import AddButton from './addObjButton/AddObjButton'

/* Model */
import CellType from '../../model/CellType'

import useStage from '../../hooks/useStage'

const Obj = () => {
    let view = <></>;

    const { name } = useStage();

    const [objList, setObjList] = React.useState<CellType[]>([])

    React.useEffect(() => {
        data.getObj().then((response) => {
            setObjList(utility.parse(response.data))
        })
    }, [])

    if(name !== "OBJECTIVE") {
        return (view)
    }

    view = 
    <Container>
        <Timeline cellList={objList} setCellList={setObjList} />
        <AddButton />
    </Container>

    return (view);
}

const Container = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    top: 70px; bottom: 0;
    margin: auto;
`;

export default Obj;