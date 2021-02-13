import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import Plan from '../stores/plan';
import Sign from '../stores/sign';
import { getPlansThunk, putPlansThunk } from './thunk'

export default function usePlans() {
    const body = useSelector((state: RootState) => state.plans).body;
    let selectPlans: Array<Plan> = [];

    if(body instanceof Array) {
        selectPlans = body;
    }
    
    const dispatch = useDispatch();
    const getPlans = (sign: Sign) => { dispatch(getPlansThunk(sign)) }
    const putPlans = (plan: Plan, sign: Sign) => { dispatch(putPlansThunk(plan, sign)) }

    return {
        selectPlans,
        getPlans,
        putPlans
    }
}