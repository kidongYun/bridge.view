import React from 'react'
import styled from 'styled-components'

import CellComponent from '../components/cell/CellComponent';

import * as data from '../service/Data'
import * as utility from '../service/Utility'

import useHandle from '../hooks/useHandle';
import useData from '../hooks/useData';
import useCell from '../hooks/useCell';

const TodoController = () => {
    const { handle_onShow } = useHandle();

    const { data_todoList, data_onSetTodoList } = useData();

    React.useEffect(() => {
        data.getObj(true).then((response) => {
            data_onSetTodoList(utility.parse(response.data.data));
        });
    }, []);

    let view = 
    <Container>
        <CellComponent
            borderRadius="10px"
            backgroundColor="#007bff"
            backgroundHover="#0069d9"
            height="100px"
            title={{ text: "+", fontSize: "20pt", color: "#ffffff", verticalAlign: "center", horizontalAlign: "center" }}
            onClick={() => {}}
        />
    </Container>;

    return view;
}

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 500px;

    margin: auto;
    overflow-y: auto;
`

export default TodoController;
