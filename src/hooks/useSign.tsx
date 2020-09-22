import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { updateStatus, updateDesc, updateEmail, updatePassword } from '../store/sign'

export default function useSign() {
    const status = useSelector((state: RootState) => state.sign.status);
    const desc = useSelector((state: RootState) => state.sign.desc);
    const email = useSelector((state: RootState) => state.sign.email);
    const password = useSelector((state: RootState) => state.sign.password);

    const dispatch = useDispatch();
    const onUpdateStatus = useCallback((status: boolean) => dispatch(updateStatus(status)), [dispatch]);
    const onUpdateDesc = useCallback((desc: string) => dispatch(updateDesc(desc)), [dispatch]);
    const onUpdateEmail = useCallback((email: string) => dispatch(updateEmail(email)), [dispatch]);
    const onUpdatePassword = useCallback((password: string) => dispatch(updatePassword(password)), [dispatch]);

    return {
        status,
        desc,
        email,
        password,
        onUpdateStatus,
        onUpdateDesc,
        onUpdateEmail,
        onUpdatePassword
    }
}