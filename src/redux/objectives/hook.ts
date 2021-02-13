import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import Objective from '../stores/objective';
import Sign from '../stores/sign';
import { getObjectivesThunk, postObjectivesThunk, putObjectivesThunk, deleteObjectivesThunk } from './thunk'

export default function useObjectives() {
    const body = useSelector((state: RootState) => state.objectives).body;
    let selectObjectives: Array<Objective> = [];

    if(body instanceof Array) {
        selectObjectives = body;
    }

    const dispatch = useDispatch();
    const getObjectives = (sign: Sign) => { dispatch(getObjectivesThunk(sign)) }
    const postObjectives = (param: Objective, sign: Sign) => { dispatch(postObjectivesThunk(param, sign)) }
    const putObjectives = (param: Objective, sign: Sign) => { dispatch(putObjectivesThunk(param, sign)) }
    const deleteObjectives = (id: number, sign: Sign) => { dispatch(deleteObjectivesThunk(id, sign)) }

    return {
        selectObjectives,
        getObjectives,
        postObjectives,
        putObjectives,
        deleteObjectives
    }
}