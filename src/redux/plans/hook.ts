import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import Plan from '../stores/plan';
import { getPlansThunk, putPlansThunk } from './thunk'

export default function usePlans() {
    const body = useSelector((state: RootState) => state.plans).body;
    let selectPlans: Array<Plan> = [];

    if(body instanceof Array) {
        selectPlans = body;
    }
    
    const dispatch = useDispatch();
    const getPlans = (date: boolean) => { dispatch(getPlansThunk(date)) }
    const putPlans = (param: Plan) => { dispatch(putPlansThunk(param)) }

    return {
        selectPlans,
        getPlans,
        putPlans
    }
}