import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { getObjectivesThunk } from '../objectives/thunks'

export default function useObjectives() {
    const { data, loading, error } = useSelector((state: RootState) => state.objectives.objectives);
    const dispatch = useDispatch();

    const getObjectives = () => { dispatch(getObjectivesThunk()) }

    return {
        data,
        loading,
        error,
        getObjectives
    }
}