import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { getObjectivesThunk } from './thunk'

export default function useObjectives() {
    const selectObjectives = useSelector((state: RootState) => state.objectives.response);

    const dispatch = useDispatch();
    const getObjectives = (date: boolean) => { dispatch(getObjectivesThunk(date)) }

    return {
        selectObjectives,
        getObjectives
    }
}