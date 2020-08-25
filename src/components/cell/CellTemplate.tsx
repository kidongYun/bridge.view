import React from 'react'
import styled from 'styled-components'

import Cell from './Cell'
import ObjectiveType from '../../model/ObjectiveType'
import CellType from '../../model/CellType'

export const ObjectiveTemplate = (obj: ObjectiveType, onSetObjectiveList: () => void) => {
    return <Cell
        borderRadius="10px"
        color="#eeeeee" 
        height="80px"
        header={{ text: obj.title, verticalAlign: "center", horizontalAlign: "center" }}
        contents={[]}
        status={obj.status}
        onClick={() => {
            obj.display = "DETAIL";
            onSetObjectiveList;
        }}
    />
}