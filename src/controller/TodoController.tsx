import React from 'react'
import styled from 'styled-components'

import CellComponent from '../components/cell/CellComponent';

import TodoType from '../model/TodoType';
import DateType from '../model/DateType';

import * as data from '../service/Data'
import * as utility from '../service/Utility'

import useHandle from '../hooks/useHandle';
import useData from '../hooks/useData';
import useCell from '../hooks/useCell';

const TodoController = () => {
    const { handle_onShow } = useHandle();

    const { data_todoList, data_onSetTodoList } = useData();

    React.useEffect(() => {
        data.getTodo().then((response) => {
            console.log(response.data.data);
            data_onSetTodoList(utility.parse(response.data.data));
        });
    }, []);

    let view = 
    <Container>

        {data_todoList.map((todo) => {
            if(todo instanceof TodoType && todo.type === "TODO") {
                return <CellComponent
                borderRadius="10px"
                backgroundColor="#eeeeee"
                backgroundHover="#e4e4e4"
                height="250px"
                title={{ text: todo.task, fontSize: "13pt", verticalAlign: "center", horizontalAlign: "center" }}
                onClick={() => {}}/>
            }

            if(todo instanceof DateType && todo.type === "DATE") {
                return <>
                    <CellComponent
                        borderRadius="0px"
                        title={{ text: todo.getDate(), backgroundColor: "513674", verticalAlign: "flex-end", horizontalAlign: "flex-start" }}
                    />
                    <CellComponent
                        borderRadius="10px"
                        backgroundColor="#007bff"
                        backgroundHover="#0069d9"
                        height="100px"
                        title={{ text: "+", fontSize: "20pt", color: "#ffffff", verticalAlign: "center", horizontalAlign: "center" }}
                        onClick={() => {}}
                    />
                </>
            }
        })}
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