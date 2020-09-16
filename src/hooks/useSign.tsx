import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { updateStatus, updateDesc, updateEmail } from '../store/sign'

export default function useSign() {
    const status = useSelector((state: RootState) => state.sign.status);
    const desc = useSelector((state: RootState) => state.sign.desc);
    const email = useSelector((state: RootState) => state.sign.email);

    const dispatch = useDispatch();
    const onUpdateStatus = useCallback((status: boolean) => dispatch(updateStatus(status)), [dispatch]);
    const onUpdateDesc = useCallback((desc: string) => dispatch(updateDesc(desc)), [dispatch]);
    const onUpdateEmail = useCallback((email: string) => dispatch(updateEmail(email)), [dispatch]);

    return {
        status,
        desc,
        email,
        onUpdateStatus,
        onUpdateDesc,
        onUpdateEmail
    }
}