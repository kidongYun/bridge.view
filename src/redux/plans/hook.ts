import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { getPlansThunk } from './thunk'

export default function usePlans() {
    const selectPlans = useSelector((state: RootState) => state.plans);
    
    const dispatch = useDispatch();
    const getPlans = (date: boolean) => { dispatch(getPlansThunk(date)) }

    return {
        selectPlans,
        getPlans
    }
}