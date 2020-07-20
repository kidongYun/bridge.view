import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { getPlan } from '../modules/plan';
import PlanType from '../model/PlanType';

export default function usePlan() {
    const planList = useSelector((state: RootState) => state.plan.planList);

    const dispatch = useDispatch();
    const onGetPlan = useCallback((planList: PlanType[]) => dispatch(getPlan(planList)), [dispatch]);

    return {
        planList,
        onGetPlan
    }
}