import React from 'react'
import styled from 'styled-components'

import * as data from '../../service/Data'

import useObjective from '../../hooks/useObjective';
import Cell from '../../components/timeline/Cell';

const ObjectiveTimeline = () => {
    const { objectiveList, onGetObjective } = useObjective();

    React.useEffect(() => {
        data.getObj().then((response) => {
            onGetObjective(response.data);
        })
    }, []);

    let view = 
    <Container>
        {objectiveList.map(
            (obj) => (
                <Cell 
                    borderRadius="10px"
                    color="#eeeeee" 
                    height="80px"
                    header={obj.title}
                    content={[]}
                    status={obj.status}
                    onClick={undefined}
                />
            ) 
        )}
    </Container>

    return view;
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;

    margin: auto;
    overflow-y: auto;
`

export default ObjectiveTimeline;