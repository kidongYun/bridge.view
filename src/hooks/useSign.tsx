import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { updateStatus, updateDesc, updateEmail, updatePassword } from '../store/sign'

export default function useSign() {
    const sign_status = useSelector((state: RootState) => state.sign.status);
    const sign_desc = useSelector((state: RootState) => state.sign.desc);
    const sign_email = useSelector((state: RootState) => state.sign.email);
    const sign_password = useSelector((state: RootState) => state.sign.password);

    const dispatch = useDispatch();
    const sign_onUpdateStatus = useCallback((status: boolean) => dispatch(updateStatus(status)), [dispatch]);
    const sign_onUpdateDesc = useCallback((desc: string) => dispatch(updateDesc(desc)), [dispatch]);
    const sign_onUpdateEmail = useCallback((email: string) => dispatch(updateEmail(email)), [dispatch]);
    const sign_onUpdatePassword = useCallback((password: string) => dispatch(updatePassword(password)), [dispatch]);

    return {
        sign_status,
        sign_desc,
        sign_email,
        sign_password,
        sign_onUpdateStatus,
        sign_onUpdateDesc,
        sign_onUpdateEmail,
        sign_onUpdatePassword
    }
}