import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import Objective from '../stores/objective';
import { getObjectivesThunk, postObjectivesThunk, putObjectivesThunk, deleteObjectivesThunk } from './thunk'

export default function useObjectives() {
    const body = useSelector((state: RootState) => state.objectives).body;
    let selectObjectives: Array<Objective> = [];

    if(body instanceof Array) {
        console.log(body);
        selectObjectives = body;
    }

    const dispatch = useDispatch();
    const getObjectives = () => { dispatch(getObjectivesThunk()) }
    const postObjectives = (param: Objective) => { dispatch(postObjectivesThunk(param)) }
    const putObjectives = (param: Objective) => { dispatch(putObjectivesThunk(param)) }
    const deleteObjectives = (id: number) => { dispatch(deleteObjectivesThunk(id)) }

    return {
        selectObjectives,
        getObjectives,
        postObjectives,
        putObjectives,
        deleteObjectives
    }
}