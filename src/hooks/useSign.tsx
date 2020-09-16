import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { updateSign } from '../store/sign'

export default function useSign() {
    const status = useSelector((state: RootState) => state.sign.status);
    const description = useSelector((state: RootState) => state.sign.description);

    const dispatch = useDispatch();
    const onUpdateSign = useCallback((status: boolean, description: string) => dispatch(updateSign(status, description)), [dispatch]);

    return {
        status,
        description,
        onUpdateSign
    }
}