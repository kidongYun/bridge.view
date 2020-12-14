import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import Objective from '../stores/objective';
import { getObjectivesThunk, postObjectivesThunk, putObjectivesThunk, deleteObjectivesThunk } from './thunk'

export default function useObjectives() {
    const selectObjectives = useSelector((state: RootState) => state.objectives);

    const dispatch = useDispatch();
    const getObjectives = (date: boolean) => { dispatch(getObjectivesThunk(date)) }
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