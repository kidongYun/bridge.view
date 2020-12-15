import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import Plan from '../stores/plan';
import { getPlansThunk, putPlansThunk } from './thunk'

export default function usePlans() {
    const selectPlans = useSelector((state: RootState) => state.plans);
    
    const dispatch = useDispatch();
    const getPlans = (date: boolean) => { dispatch(getPlansThunk(date)) }
    const putPlans = (param: Plan) => { dispatch(putPlansThunk(param)) }

    return {
        selectPlans,
        getPlans,
        putPlans
    }
}